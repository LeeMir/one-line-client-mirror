import fetchApi from '@/utils/fetch';

import { IOneLine, IThreeLines, ITitleColor } from '@/types/response';

export const fetchGetThreeLines = () => fetchApi.get<IThreeLines>('/line');

export const fetchGetOneLine = (id: string) => fetchApi.get<IOneLine>(`/line/${id}`);

export const fetchGetTitleColor = () => fetchApi.get<ITitleColor>('/line/title');
