import { useCallback } from 'react';

import {
  GoBottomBtn,
  GoBottomBtnImg,
  MessageListContainer,
  SectionTitle,
  SectionContainer,
} from './SelectSection.styled';

import { Message } from '@/components/Message';
import { Barista } from '@/components/Barista';

import useScrollLock from '@/hooks/useScrollLock';
import useMainPageState from '@/hooks/useMainPageState';
import useLogin from '@/hooks/useLogin';

import { safeLocalStorage } from '@/utils/storage';

import { MessageValue } from '@/types/message';

import { STORAGE_KEYS } from '@/constants/storageKey';
import { PAGE_STATE } from '@/constants/state';
import PenDrawingIcon from '@/assets/icons/icon-pen-drawing.svg';

const motionContainer = {
  transition: { type: 'keyframes', ease: 'easeInOut' },
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.25,
      delay: 0.35,
    },
  },
};

const motionChild = {
  hidden: { opacity: 0, y: -25, transition: { ease: 'easeInOut', duration: 0.7 } },
  show: { opacity: 1, y: 0, transition: { ease: 'easeInOut', duration: 0.7 } },
};

const motionMsgListContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1,
      delay: 0.25,
    },
  },
};

const motionFadeIn = {
  hidden: { opacity: 0, transition: { ease: 'linear', duration: 0.7, delay: 0.25 } },
  show: { opacity: 1, transition: { ease: 'linear', duration: 0.7, delay: 0.25 } },
};

interface SelectSectionValue {
  messageList: MessageValue[];
}

const SelectSection = ({ messageList }: SelectSectionValue) => {
  const { openScroll } = useScrollLock();
  const { getMainPageState, setMainPageState, setSelectedMsgId } = useMainPageState();

  const { pageState, selectedMsgId } = getMainPageState();
  const { getMe } = useLogin();

  const clickMessageHandler = useCallback(
    (id: number) => {
      if (pageState === PAGE_STATE.BEFORE_SELECT) {
        safeLocalStorage.set(STORAGE_KEYS.SELECTED_LINE_ID, id.toString());
        setSelectedMsgId(id);
        setMainPageState(PAGE_STATE.AFTER_SELECT);
      }
    },
    [pageState, setSelectedMsgId, setMainPageState],
  );

  const clickGoBottomBtnHandler = () => {
    openScroll();
  };

  return (
    <SectionContainer variants={motionContainer} initial='hidden' animate='show' exit='hidden'>
      <Barista variants={motionChild} layout />

      {pageState === PAGE_STATE.BEFORE_SELECT ? (
        <SectionTitle variants={motionChild}>
          지구 어딘가에서 {getMe().name}님께 보낸 한 줄입니다. <br />
          가장 공감이 되는 한 줄은 무엇인가요?
        </SectionTitle>
      ) : null}
      {pageState === PAGE_STATE.AFTER_SELECT ? (
        <SectionTitle variants={motionFadeIn}>
          감사합니다! <br />
          손님도 한 줄 적어보시겠어요? <br />
          <br />
          로그인하시면 고른 한 줄을 담아서 보실 수도 있습니다!
        </SectionTitle>
      ) : null}

      <MessageListContainer variants={motionMsgListContainer} layout transition={{ duration: 0.5 }}>
        {messageList.map((item) =>
          pageState === PAGE_STATE.BEFORE_SELECT || item.id === selectedMsgId ? (
            <Message
              key={item.id}
              id={item.id}
              variants={motionChild}
              title={item.title}
              content={item.content}
              onClick={() => clickMessageHandler(item.id)}
              selected={item.id === selectedMsgId}
              layout
            />
          ) : null,
        )}
      </MessageListContainer>
      {pageState === PAGE_STATE.AFTER_SELECT ? (
        <GoBottomBtn
          variants={motionFadeIn}
          onClick={() => clickGoBottomBtnHandler()}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.25 }}
        >
          <GoBottomBtnImg src={PenDrawingIcon} />
          나도 한 줄 적어보기
        </GoBottomBtn>
      ) : null}
    </SectionContainer>
  );
};

export default SelectSection;
