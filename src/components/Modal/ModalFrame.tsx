import {
  ModalBackground,
  ModalCloseBtn,
  ModalCloseBtnImg,
  ModalContainer,
  ModalInnerContainer,
  ModalTitle,
} from './style';

import useModal from '@/hooks/useModal';

import { ModalProps } from '@/types/modal';

import CloseIcon from '@/assets/icons/icon-x.svg';

const motionContainer = {
  hidden: { opacity: 0, y: '100%' },
  show: {
    opacity: 1,
    y: '0%',
  },
};

const ModalFrame = ({ type, title, children }: ModalProps) => {
  const { hideModal } = useModal();

  const onBackground = () => {
    hideModal();
  };

  return (
    <ModalContainer variants={motionContainer} initial='hidden' animate='show' exit='hidden'>
      {type === 'none' ? (
        children
      ) : (
        <ModalInnerContainer>
          {title ? <ModalTitle>{title}</ModalTitle> : null}
          {children}
          <ModalCloseBtn onClick={onBackground}>
            <ModalCloseBtnImg src={CloseIcon} />
          </ModalCloseBtn>
        </ModalInnerContainer>
      )}

      <ModalBackground onClick={onBackground} />
    </ModalContainer>
  );
};

export default ModalFrame;
