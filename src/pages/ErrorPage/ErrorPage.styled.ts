import styled from 'styled-components';

import { FontWeight } from '@/constants/font';
import { ColorCode } from '@/constants/color';

export const ErrorPageContainer = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${ColorCode.OFFWHITE};
`;

export const ErrorPageTitle = styled.span`
  font-weight: ${FontWeight.BOLD};
  font-size: 10rem;
`;
