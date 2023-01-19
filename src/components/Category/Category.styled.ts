import styled from 'styled-components';

import { FontSize } from '@/constants/font';

interface CategoryWrapperValue {
  color: string;
  backgroundColor: string;
}

export const CategoryWrapper = styled.div<CategoryWrapperValue>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 6rem;
  height: 2.5rem;
  box-sizing: border-box;
  border-radius: 1.5rem;
  font-size: ${FontSize.L};

  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
`;
