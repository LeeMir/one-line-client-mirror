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
`;

export const MessageWrapper = styled.div`
  flex-grow: 1;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  font-size: ${FontSize.L};
`;

export const RecommendBtn = styled.button`
  width: 3rem;
`;

export const RecommendImg = styled.img`
  width: 100%;

  filter: invert(70%);
`;
