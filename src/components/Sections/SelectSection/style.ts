import styled from 'styled-components';
import { motion } from 'framer-motion';

import { FontSize, FontWeight } from '@/constants/font';
import { ColorCode } from '@/constants/color';

export const SelectContainer = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  gap: 4rem;
`;

export const SectionTitle = styled(motion.span)`
  font-size: ${FontSize.XXL};
  font-weight: ${FontWeight.REGULAR};
  color: ${ColorCode.WHITE};
  text-align: center;
  line-height: 1.5;
`;

export const TitleImg = styled(motion.img)`
  width: 20rem;
`;

export const MessageListContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  gap: 4rem;
`;
