import { useRecoilState } from 'recoil';

import { ValueOf } from '@/utils/helperType';

import { pageStateState } from '@/stores/state';

import { PAGE_STATE } from '@/constants/state';

const useMainPageState = () => {
  const [pageState, setPageState] = useRecoilState(pageStateState);

  const getMainPageState = () => {
    return pageState;
  };

  const setMainPageState = (state: ValueOf<typeof PAGE_STATE>) => {
    setPageState((prev) => ({ ...prev, pageState: state }));
  };

  const setSelectedMsgId = (idx: number) => {
    setPageState((prev) => ({ ...prev, selectedMsgId: idx }));
  };

  return {
    getMainPageState,
    setMainPageState,
    setSelectedMsgId,
  };
};

export default useMainPageState;
