import { SectionTitle, SectionContainer, TitleImg } from './style';

import WaiterImg from '@/assets/images/waiter.png';

const motionContainer = {
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

const InputSection = () => {
  return (
    <SectionContainer variants={motionContainer} initial='hidden' animate='show' exit='hidden'>
      <TitleImg src={WaiterImg} variants={motionChild} layout />

      <SectionTitle variants={motionChild}>손님의 오늘의 한 줄은 무엇이었나요?</SectionTitle>
    </SectionContainer>
  );
};

export default InputSection;
