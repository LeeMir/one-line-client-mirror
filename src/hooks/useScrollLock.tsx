import { useRecoilState } from 'recoil';
import { useCallback } from 'react';

import { scrollLockState } from '@/stores/scroll';

const useScrollLock = () => {
  const [isLock, setIsLock] = useRecoilState(scrollLockState);

  const lockScroll = useCallback(() => {
    document.body.style.overflow = 'hidden';
    setIsLock(true);
  }, [setIsLock]);

  const openScroll = useCallback(() => {
    document.body.style.removeProperty('overflow');
    setIsLock(false);
  }, [setIsLock]);

  return { isLock, lockScroll, openScroll };
};

export default useScrollLock;
