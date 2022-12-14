import styled from 'styled-components';
import { motion } from 'framer-motion';

import { FontSize, FontWeight } from '@/constants/font';
import { ColorCode } from '@/constants/color';

export const SectionContainer = styled(motion.div)`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  position: absolute;
  bottom: 0;

  gap: 5rem;
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
