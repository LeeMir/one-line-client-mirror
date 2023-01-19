/* eslint-disable camelcase */

import useCategory from './useCategory';
import { CategoryWrapper } from './Category.styled';

import { getContrastColorOnlyBW } from '@/utils/color';

interface CategoryValue {
  category: string;
}

const Category = ({ category }: CategoryValue) => {
  const dict = useCategory();
  const { title_korean, color: bgColor } = dict[category] ?? dict.unknown;

  const textColor = getContrastColorOnlyBW(bgColor);

  return (
    <CategoryWrapper backgroundColor={bgColor} color={textColor}>
      {title_korean}
    </CategoryWrapper>
  );
};

export default Category;
