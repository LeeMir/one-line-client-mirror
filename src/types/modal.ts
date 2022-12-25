import React from 'react';

export type ModalTypes = 'confirm' | 'alert' | 'none';

export interface ModalProps {
  type?: ModalTypes; // Modal 타입
  children?: React.ReactNode; // children 컴포넌트
  title?: string | React.ReactNode; // (type === 'bottom'일 경우) 헤더
}
