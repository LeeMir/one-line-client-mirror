import fetchApi from '@/utils/fetch';

import { IUserInfo } from '@/types/response';

export const fetchGetMyInfo = () => fetchApi.get<IUserInfo>('/user/info');
