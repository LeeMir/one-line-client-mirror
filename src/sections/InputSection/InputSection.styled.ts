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

export const InputContainer = styled(motion.div)`
  display: flex;
  width: fit-content;
  height: 5rem;
  gap: 1rem;
  border-bottom: 1px solid ${ColorCode.WHITE};
`;

export const Input = styled.input`
  width: 25rem;

  font-size: 2rem;
  font-weight: ${FontWeight.LIGHT};
  color: ${ColorCode.WHITE};
  white-space: nowrap;
  text-overflow: ellipsis;

  background: none;
  border: none;

  max-width: 80vw;

  &:focus-visible {
    outline: none;
    width: 60rem;
  }

  transition: width 0.5s;
`;

export const InputImg = styled.img`
  width: 3rem;
  filter: invert(100%);
`;

export const ResetButton = styled(motion.button)`
  width: 3rem;
`;

export const ResetButtonImg = styled.img`
  width: 100%;
  filter: invert(100%);
`;

export const SendButton = styled(motion.button)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.7rem;

  height: 7rem;
  width: 15rem;

  background-color: ${ColorCode.OFFWHITE};
  border: 4px solid ${ColorCode.CURTAIN};
  box-shadow: 5px 15px 10px rgba(0, 0, 0, 0.35);
  border-radius: 3.5rem;

  font-size: ${FontSize.L};

  hover {
    background-color: ${ColorCode.WHITE};
  }

  transition: background-color 0.35s ease-in-out;
`;

export const SendButtonImg = styled.img`
  width: 2rem;
`;

export const SendButtonText = styled.span``;

export const LoginModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 1rem 2rem 3rem 2rem;
  height: 17rem;
  width: 37rem;

  align-items: center;
`;

export const LoginModalText = styled.span`
  font-size: ${FontSize.XL};
  font-weight: ${FontWeight.REGULAR};
  line-height: 1.5;
  align-self: flex-start;
  b {
    font-size: ${FontSize.XL};
    font-weight: ${FontWeight.MEDIUM};
  }
`;

export const CategoryRadioGroupContainer = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;

  width: 40rem;
  align-items: center;
  justify-content: center;

  gap: 2rem;
`;
