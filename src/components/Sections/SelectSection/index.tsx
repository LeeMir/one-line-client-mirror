import {
  GoBottomBtn,
  GoBottomBtnImg,
  MessageListContainer,
  SectionTitle,
  SectionContainer,
  TitleImg,
} from './style';

import Message from '@/components/Message';

import useScrollLock from '@/hooks/useScrollLock';
import useMainPageState from '@/hooks/useMainPageState';

import { MessageValue } from '@/types/message';

import { PAGE_STATE } from '@/constants/state';
import WaiterImg from '@/assets/images/waiter.png';
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
  const { getMainPageState, setMainPageState, setSelectedMsgIdx } = useMainPageState();

  const { pageState, selectedMsgIdx } = getMainPageState();

  const clickMessageHandler = (idx: number) => {
    if (pageState === PAGE_STATE.BEFORE_SELECT) {
      setSelectedMsgIdx(idx);
      setMainPageState(PAGE_STATE.AFTER_SELECT);
    }
  };

  const clickGoBottomBtnHandler = () => {
    openScroll();
  };

  return (
    <SectionContainer variants={motionContainer} initial='hidden' animate='show' exit='hidden'>
      <TitleImg src={WaiterImg} variants={motionChild} layout />

      {pageState === PAGE_STATE.BEFORE_SELECT ? (
        <SectionTitle variants={motionChild}>
          ?????? ??????????????? ????????? ?????? ??? ????????????. <br />
          ?????? ????????? ?????? ??? ?????? ????????????????
        </SectionTitle>
      ) : null}
      {pageState === PAGE_STATE.AFTER_SELECT ? (
        <SectionTitle variants={motionFadeIn}>
          ???????????????! <br />
          ????????? ??? ??? ?????????????????????? <br />
          ?????????????????? ?????? ??? ?????? ????????? ?????? ?????? ????????????!
        </SectionTitle>
      ) : null}

      <MessageListContainer variants={motionMsgListContainer} layout transition={{ duration: 0.5 }}>
        {messageList.map((item, idx) =>
          pageState === PAGE_STATE.BEFORE_SELECT || idx === selectedMsgIdx ? (
            <Message
              key={idx}
              variants={motionChild}
              title={item.title}
              content={item.content}
              onClick={() => clickMessageHandler(idx)}
              selected={idx === selectedMsgIdx}
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
          ?????? ??? ??? ????????????
        </GoBottomBtn>
      ) : null}
    </SectionContainer>
  );
};

export default SelectSection;
