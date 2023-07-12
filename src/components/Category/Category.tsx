/* eslint-disable camelcase */

import { CategoryWrapper } from './Category.styled';

import useCategory from '@/hooks/useCategory';

import { getContrastColorOnlyBW } from '@/utils/color';

interface CategoryValue {
  category: string;
  value?: string;
  disabled?: boolean;
}

const Category = ({ category, value = '', disabled = false }: CategoryValue) => {
  const dict = useCategory();
  const { title_korean, color: bgColor } = dict[category] ?? dict.unknown;

  const textColor = getContrastColorOnlyBW(bgColor);

  return (
    <CategoryWrapper
      className='category'
      backgroundColor={bgColor}
      color={textColor}
      disabled={disabled}
    >
      {title_korean ?? value}
    </CategoryWrapper>
  );
};

export default Category;
