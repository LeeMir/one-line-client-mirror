import styled from 'styled-components';

import { FontSize } from '@/constants/font';
import { ColorCode } from '@/constants/color';

interface CategoryWrapperValue {
  color: string;
  backgroundColor: string;
  disabled: boolean;
}

export const CategoryWrapper = styled.div<CategoryWrapperValue>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 6rem;
  height: 2.5rem;
  box-sizing: border-box;
  border-radius: 1.5rem;
  font-size: ${FontSize.M};

  background-color: ${(props) => (props.disabled ? 'none' : props.backgroundColor)};
  color: ${(props) => (props.disabled ? ColorCode.WHITE : props.color)};

  border: ${(props) => (props.disabled ? `1px solid ${ColorCode.WHITE}` : 'none')};

  &:hover {
    background-color: ${(props) => props.backgroundColor};
    color: ${(props) => props.color};

    border: none;
  }

  transition: all 0.5s ease-out;
`;
