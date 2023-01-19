import { ValueOf } from '@/utils/helperType';

import { PAGE_STATE } from '@/constants/state';

export interface MainPageStateValue {
  pageState: ValueOf<typeof PAGE_STATE>; // 페이지 상태
  selectedMsgIdx: number; // 선택한 한 줄 id
}
