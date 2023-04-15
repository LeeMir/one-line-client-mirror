import { Variants } from 'framer-motion';

export const motionContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.25,
      delay: 0,
    },
  },
};

export const motionSink: Variants = {
  hidden: { opacity: 0, y: -25, transition: { ease: 'easeInOut', duration: 0.7 } },
  show: { opacity: 1, y: 0, transition: { ease: 'easeInOut', duration: 0.7 } },
};

export const motionRaise: Variants = {
  hidden: { opacity: 0, y: 25, transition: { ease: 'easeOut', duration: 0.5 } },
  show: { opacity: 1, y: 0, transition: { ease: 'easeOut', duration: 0.5 } },
};

export const motionCross: Variants = {
  hidden: { opacity: 0, scaleX: 0, transition: { ease: 'easeOut', duration: 0.5 } },
  show: { opacity: 1, scaleX: 1, transition: { ease: 'easeOut', duration: 0.5 } },
};
