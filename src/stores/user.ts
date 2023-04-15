import { atom } from 'recoil';

import { UserValue } from '@/types/user';

export const userState = atom<UserValue>({
  key: 'userState',
  default: {
    name: '',
    isLogined: false,
  },
});
