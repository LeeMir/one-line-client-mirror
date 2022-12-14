/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, useScroll, useTransform } from 'framer-motion';

import { MainPageContainer } from './style';

import SelectSection from '@/components/Sections/SelectSection';
import InputSection from '@/components/Sections/InputSection';
import EmptySection from '@/components/Sections/EmptySection';
import Curtain from '@/components/Curtain';

import useScrollLock from '@/hooks/useScrollLock';
import useMainPageState from '@/hooks/useMainPageState';

import { MessageValue } from '@/types/message';

import { PAGE_STATE } from '@/constants/state';

const dummy: MessageValue[] = [
  { category: '위로', message: '맘껏 울어라 억지로 버텨라 내일은 내일의 해가 뜰테니' },
  { category: '사랑', message: '나의 하얀 옷에 너의 잉크가 묻어 닦아낼 수 없을만큼 번졌네' },
  { category: '공부', message: '들은 것은 잊어버리고, 본 것은 기억하고 직접 해본 것은 이해한다' },
];

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
      <AnimatePresence mode='wait'>
        {pageState <= PAGE_STATE.AFTER_SELECT ? (
          <SelectSection key='section-select' messageList={dummy} />
        ) : null}
        {pageState === PAGE_STATE.INPUT ? <InputSection key='section-input' /> : null}
      </AnimatePresence>

      <div ref={scrollBottomRef} />
    </MainPageContainer>
  );
};

export default MainPage;
