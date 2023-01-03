import { ColorCode } from '@/constants/color';

export const getContrastColorOnlyBW = (code: string) => {
  const color = code.charAt(0) === '#' ? code.substring(1, 7) : code;

  if (color.length !== 6) return ColorCode.BLACK;

  const r = parseInt(color.substring(0, 2), 16);
  const g = parseInt(color.substring(2, 4), 16);
  const b = parseInt(color.substring(4, 6), 16);

  const isBright = r * 0.299 + g * 0.587 + b * 0.114 > 186;

  return isBright ? ColorCode.BLACK : ColorCode.WHITE;
};
