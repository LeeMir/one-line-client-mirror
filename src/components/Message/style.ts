import styled from 'styled-components';
import { motion } from 'framer-motion';

import { FontSize } from '@/constants/font';
import { ColorCode } from '@/constants/color';

export const MessageContainer = styled(motion.div)`
  display: flex;
  gap: 2rem;
  align-items: center;

  width: 60rem;
  height: 7rem;
  padding: 2rem 3rem;
  box-sizing: border-box;
  border-radius: 3.5rem;

  background-color: ${ColorCode.OFFWHITE};
  box-shadow: 5px 15px 10px rgba(0, 0, 0, 0.35);

  &:hover {
    background-color: ${ColorCode.WHITE};
    button img {
      filter: invert(11%) sepia(82%) saturate(4489%) hue-rotate(356deg) brightness(91%)
        contrast(117%);
    }
  }

  transition: background-color 0.35s ease-in-out;
`;

export const MessageWrapper = styled.div`
  flex-grow: 1;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  font-size: ${FontSize.L};
`;

interface BtnValue {
  selected: boolean;
}

export const RecommendBtn = styled.button<BtnValue>`
  width: 3rem;

  img {
    filter: ${(props) =>
      props.selected
        ? 'invert(11%) sepia(82%) saturate(4489%) hue-rotate(356deg) brightness(91%) contrast(117%)' // ColorCode.CURTAIN
        : 'invert(70%)'};
  }
`;

export const RecommendImg = styled.img`
  width: 100%;
`;
