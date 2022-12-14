import { CategoryType } from '@/types/category';

export enum ColorCode {
  BLACK = '#000000',
  WHITE = '#FFFFFF',
  OFFWHITE = '#F7F7F7',
  CURTAIN = '#920000',
  LIGHT_GREY = '#D3D3D3',
}

export const CategoryColorCode: { [key in CategoryType]: string } = {
  위로: '#8FBDD3',
  사랑: '#F4BFBF',
  공부: '#90C8AC',
} as const;
