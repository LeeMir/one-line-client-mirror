import styled from 'styled-components';

import { CategoryType } from '@/types/category';

import { FontSize } from '@/constants/font';
import { CategoryColorCode } from '@/constants/color';

interface CategoryWrapperValue {
  category: CategoryType;
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

  background: ${(props) => CategoryColorCode[props.category] ?? ''};
`;
