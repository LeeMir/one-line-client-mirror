import styled from 'styled-components';
import { motion } from 'framer-motion';

import { FontSize, FontWeight } from '@/constants/font';
import { ColorCode } from '@/constants/color';

export const SectionContainer = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  gap: 5rem;

  padding: 3rem;
  box-sizing: border-box;
`;

export const SectionTitle = styled(motion.span)`
  font-size: ${FontSize.XXL};
  font-weight: ${FontWeight.REGULAR};
  color: ${ColorCode.WHITE};
  text-align: center;
  line-height: 1.5;

  word-break: keep-all;
`;

export const TitleImg = styled(motion.img)`
  width: 20rem;
`;

export const MessageListContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  gap: 3rem;

  width: 100%;
`;

export const GoBottomBtn = styled(motion.button)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  height: 7rem;
  width: 17rem;

  background-color: ${ColorCode.OFFWHITE};
  border: 4px solid ${ColorCode.CURTAIN};
  box-shadow: 5px 15px 10px rgba(0, 0, 0, 0.35);
  border-radius: 3.5rem;

  font-size: ${FontSize.L};

  margin-top: 4rem;

  hover {
    background-color: ${ColorCode.WHITE};
  }

  transition: background-color 0.35s ease-in-out;

  @media screen and (max-width: 767px) {
    width: 22rem;
    padding: 1rem 1.5rem;

    color: ${ColorCode.WHITE};

    background: rgba(0, 0, 0, 0.2);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(8px);

    border: 1px solid ${ColorCode.CURTAIN};
    border-radius: 2rem;

    img {
      filter: invert(100%);
    }
  }
`;

export const GoBottomBtnImg = styled.img`
  width: 2rem;
`;
