import fetchApi from '@/utils/fetch';

import { IThreeLines, ITitleColor } from '@/types/response';

export const fetchGetThreeLines = () => fetchApi.get<IThreeLines>('/line');

export const fetchGetTitleColor = () => fetchApi.get<ITitleColor>('/line/title');
