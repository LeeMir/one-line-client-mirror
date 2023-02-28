/* eslint-disable camelcase */
import { useQuery } from 'react-query';

import { CategoryColorValue } from '@/types/category';

import { API_KEYS } from '@/constants/apiKey';
import { fetchGetTitleColor } from '@/apis/line';

const useCategory = () => {
  const { data } = useQuery(API_KEYS.GET_TITLE_COLOR, fetchGetTitleColor, {
    staleTime: Infinity,
    cacheTime: Infinity,
  });

  return (data ?? []).reduce(
    (pre, cur) => {
      const { title, title_korean, color } = cur;
      const next = { ...pre };
      next[title] = { title_korean, color };
      return next;
    },
    { unknown: { title_korean: '기타', color: '#FFFFFF' } } as CategoryColorValue,
  );
};

export default useCategory;
