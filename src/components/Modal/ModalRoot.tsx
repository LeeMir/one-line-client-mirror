import { useRecoilValue } from 'recoil';
import { AnimatePresence } from 'framer-motion';

import ModalFrame from './ModalFrame';

import { modalState } from '@/stores/modal';

const ModalRoot = () => {
  const modalProps = useRecoilValue(modalState);
  return (
    <AnimatePresence mode='wait'>
      {modalProps ? <ModalFrame key='modal' {...modalProps} /> : null}
    </AnimatePresence>
  );
};

export default ModalRoot;
