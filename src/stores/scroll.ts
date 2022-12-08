import { atom } from 'recoil';

export const scrollLockState = atom<boolean>({
  key: 'scrollLockState',
  default: false,
});
