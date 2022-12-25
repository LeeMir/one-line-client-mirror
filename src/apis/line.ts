import fetchApi from '@/utils/fetch';

export const fetchGetThreeLines = () => fetchApi.get('/line');
