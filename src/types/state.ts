import { ValueOf } from '@/utils/helperType';

import { PAGE_STATE } from '@/constants/state';

export interface MainPageStateValue {
  pageState: ValueOf<typeof PAGE_STATE>;
  selectedMsgIdx: number;
}
