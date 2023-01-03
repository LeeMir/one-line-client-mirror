/* eslint-disable react-hooks/exhaustive-deps */
import { useQuery } from 'react-query';
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, useScroll, useTransform } from 'framer-motion';

import { MainPageContainer } from './style';

import SelectSection from '@/components/Sections/SelectSection';
import InputSection from '@/components/Sections/InputSection';
import EmptySection from '@/components/Sections/EmptySection';
import Curtain from '@/components/Curtain';

import useScrollLock from '@/hooks/useScrollLock';
import useMainPageState from '@/hooks/useMainPageState';

import { PAGE_STATE } from '@/constants/state';
import { API_KEYS } from '@/constants/apiKey';
import { fetchGetThreeLines } from '@/apis/line';

const EMPTY_SECTIONS = 6;

const MainPage = () => {
  const scrollTopRef = useRef<HTMLDivElement>(null);
  const scrollBottomRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  const { innerWidth } = window;
  const progress = useTransform(scrollYProgress, [0, 1], [0, innerWidth]);

  const { isLock, lockScroll } = useScrollLock();
  const { getMainPageState, setMainPageState } = useMainPageState();

  const { pageState } = getMainPageState();
  const [pageOffset, setPageOffset] = useState(0);

  const scrollToTop = () => {
    if (scrollTopRef.current) {
      scrollTopRef.current.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
    }
  };

  const scrollToBottom = () => {
    if (scrollBottomRef.current) {
      scrollBottomRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
        inline: 'nearest',
      });
    }
  };

  const handleScroll = () => {
    const offset = window.scrollY / window.innerHeight;
    if (offset === 0) {
      scrollToTop();
      lockScroll();
    }
    setPageOffset(Math.floor(offset));
  };

  const { status, data: msgList } = useQuery(API_KEYS.GET_THREE_LINES, fetchGetThreeLines);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    lockScroll();
  }, []);

  useEffect(() => {
    if (!isLock) {
      scrollToBottom();
    } else {
      scrollToTop();
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
      {new Array(EMPTY_SECTIONS).fill(false).map((_, idx) => (
        <EmptySection key={idx} />
      ))}
      <Curtain progress={progress} />
      {status !== 'success' ? (
        <>Loading...</>
      ) : (
        <AnimatePresence mode='wait'>
          {pageState <= PAGE_STATE.AFTER_SELECT ? (
            <SelectSection key='section-select' messageList={msgList} />
          ) : null}
          {pageState === PAGE_STATE.INPUT ? <InputSection key='section-input' /> : null}
        </AnimatePresence>
      )}
      <div ref={scrollBottomRef} />
    </MainPageContainer>
  );
};

export default MainPage;
