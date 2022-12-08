import { MessageListContainer, SectionTitle, SelectContainer, TitleImg } from './style';

import Message from '@/components/Message';

import useScrollLock from '@/hooks/useScrollLock';

import { MessageValue } from '@/types/message';

import WaiterImg from '@/assets/images/waiter.png';

const motionContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.35,
      delay: 0.5,
    },
  },
};

const motionChild = {
  hidden: { opacity: 0, y: -25, transition: { ease: 'linear', duration: 0.5 } },
  show: { opacity: 1, y: 0, transition: { ease: 'linear', duration: 0.5 } },
};

interface SelectSectionValue {
  messageList: MessageValue[];
}

const SelectSection = ({ messageList }: SelectSectionValue) => {
  const { openScroll } = useScrollLock();
  return (
    <SelectContainer variants={motionChild} initial='hidden' animate='show' exit='hidden'>
      <TitleImg src={WaiterImg} variants={motionChild} />
      <SectionTitle variants={motionChild}>
        지구 어딘가에서 손님께 보낸 한 줄입니다. <br />
        가장 공감이 되는 한 줄은 무엇인가요?
      </SectionTitle>
      <MessageListContainer variants={motionContainer}>
        {messageList.map((item, idx) => (
          <Message
            key={idx}
            variants={motionChild}
            category={item.category}
            message={item.message}
            onClick={() => openScroll()}
          />
        ))}
      </MessageListContainer>
    </SelectContainer>
  );
};

export default SelectSection;
