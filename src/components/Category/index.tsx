/* eslint-disable camelcase */
import { CategoryWrapper } from './style';

import useCategory from '@/hooks/useCategory';

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
