/* eslint-disable react-hooks/exhaustive-deps */
import { useQuery } from 'react-query';
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, useScroll, useTransform } from 'framer-motion';

import { MainPageContainer } from './MainPage.styled';

import { Curtain } from '@/components/Curtain';

import useScrollLock from '@/hooks/useScrollLock';
import useMainPageState from '@/hooks/useMainPageState';
import useLogin from '@/hooks/useLogin';

import { safeLocalStorage } from '@/utils/storage';
import { scrollTo } from '@/utils/scroll';

import { EmptySection, InputSection, SelectSection } from '@/sections';
import { STORAGE_KEYS } from '@/constants/storageKey';
import { PAGE_STATE } from '@/constants/state';
import { API_KEYS } from '@/constants/apiKey';
import { fetchGetOneLine, fetchGetThreeLines } from '@/apis/line';

const EMPTY_SECTIONS = 6;

const EmptySections = () => {
  return (
    <>
      {new Array(EMPTY_SECTIONS).fill(false).map((_, idx) => (
        <EmptySection key={idx} />
      ))}
    </>
  );
};

const MainPage = () => {
  const { scrollYProgress } = useScroll();
  const scrollTopRef = useRef<HTMLDivElement>(null);
  const scrollBottomRef = useRef<HTMLDivElement>(null);

  const { innerWidth } = window;
  const progress = useTransform(scrollYProgress, [0, 1], [0, innerWidth]);

  const { isLock, lockScroll, openScroll } = useScrollLock();
  const { getMainPageState, setMainPageState, setSelectedMsgId } = useMainPageState();

  const { pageState } = getMainPageState();
  const [pageOffset, setPageOffset] = useState(0);

  const { getMe } = useLogin();
  const { isLogined } = getMe();

  const { isSuccess: msgListSuccess, data: msgList } = useQuery(
    API_KEYS.GET_THREE_LINES,
    fetchGetThreeLines,
    {
      enabled: !isLogined || !safeLocalStorage.get(STORAGE_KEYS.SELECTED_LINE_ID),
    },
  );

  const { isSuccess: msgSuccess, data: msg } = useQuery(
    API_KEYS.GET_ONE_LINE,
    () => fetchGetOneLine(safeLocalStorage.get(STORAGE_KEYS.SELECTED_LINE_ID)!),
    {
      enabled: isLogined && !!safeLocalStorage.get(STORAGE_KEYS.SELECTED_LINE_ID),
    },
  );

  const handleScroll = () => {
    const offset = window.scrollY / window.innerHeight;
    if (offset === 0) {
      lockScroll();
    }

    setPageOffset(Math.floor(offset));
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    if (isLogined && safeLocalStorage.get(STORAGE_KEYS.SELECTED_LINE_ID)) {
      setSelectedMsgId(Number(safeLocalStorage.get(STORAGE_KEYS.SELECTED_LINE_ID, true)));
      openScroll();
    } else {
      lockScroll();
    }
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!isLock) {
      scrollTo(scrollBottomRef);
    } else {
      scrollTo(scrollTopRef);
    }
  }, [isLock]);

  useEffect(() => {
    if (pageOffset === EMPTY_SECTIONS - 1 && pageState === PAGE_STATE.AFTER_SELECT) {
      setMainPageState(PAGE_STATE.INPUT);
    }
    if (pageOffset !== EMPTY_SECTIONS - 1 && pageState === PAGE_STATE.INPUT) {
      setMainPageState(PAGE_STATE.AFTER_SELECT);
    }
  }, [pageOffset]);

  return (
    <MainPageContainer>
      <div ref={scrollTopRef} />
      <EmptySections />
      <Curtain progress={progress} />
      {msgListSuccess || msgSuccess ? (
        <AnimatePresence mode='wait'>
          {pageState <= PAGE_STATE.AFTER_SELECT ? (
            <SelectSection key='section-select' messageList={msgList ?? [msg!]} />
          ) : null}
          {pageState === PAGE_STATE.INPUT ? <InputSection key='section-input' /> : null}
        </AnimatePresence>
      ) : null}
      <div ref={scrollBottomRef} />
    </MainPageContainer>
  );
};

export default MainPage;
