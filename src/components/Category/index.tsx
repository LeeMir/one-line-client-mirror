import { CategoryWrapper } from './style';

import { CategoryType } from '@/types/category';

interface CategoryValue {
  category: CategoryType;
}

const Category = ({ category }: CategoryValue) => {
  return <CategoryWrapper category={category}>{category}</CategoryWrapper>;
};

export default Category;
