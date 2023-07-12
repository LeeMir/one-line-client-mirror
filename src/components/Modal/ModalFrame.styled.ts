import styled from 'styled-components';
import { motion } from 'framer-motion';

import { FontSize } from '@/constants/font';
import { ColorCode } from '@/constants/color';

export const ModalContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalBackground = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 0;
`;

export const ModalInnerContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background: ${ColorCode.WHITE};
  border-radius: 15px;
  overflow: hidden;
  z-index: 1;

  @media screen and (max-width: 767px) {
    width: calc(100% - 6rem);
  }
`;

export const ModalTitle = styled.span`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  padding: 2rem 2rem 1rem 2rem;
  font-size: 1.75rem;
  img {
    width: ${FontSize.XL};
  }
`;

export const ModalCloseBtn = styled.button`
  width: 3rem;
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

export const ModalCloseBtnImg = styled.img`
  width: 100%;
`;
