import { RecoilRoot } from 'recoil';
import { Outlet } from 'react-router-dom';

import GlobalStyle from './styles/global';
import ModalRoot from './components/Modal/ModalRoot';

import '@/styles/font.css';

const Root = () => {
  return (
    <RecoilRoot>
      <Outlet />
      <ModalRoot />
      <GlobalStyle />
    </RecoilRoot>
  );
};

export default Root;
