/* eslint-disable camelcase */
import { CategoryWrapper } from './style';

import useCategory from '@/hooks/useCategory';

interface CategoryValue {
  category: string;
}

const Category = ({ category }: CategoryValue) => {
  const dict = useCategory();
  const { title_korean, color } = dict[category] ?? dict.unknown;
  return <CategoryWrapper color={color}>{title_korean}</CategoryWrapper>;
};

export default Category;
