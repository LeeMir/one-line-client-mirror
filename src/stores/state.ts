import { atom } from 'recoil';

import { MainPageStateValue } from '@/types/state';

import { PAGE_STATE } from '@/constants/state';

export const pageStateState = atom<MainPageStateValue>({
  key: 'pageStateState',
  default: {
    pageState: PAGE_STATE.BEFORE_SELECT,
    selectedMsgIdx: -1,
  },
});
