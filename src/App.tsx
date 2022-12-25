import { RecoilRoot } from 'recoil';

import GlobalStyle from './styles/global';
import ModalRoot from './components/Modal/ModalRoot';

import Router from '@/routes';

import '@/styles/font.css';

const App = () => {
  return (
    <RecoilRoot>
      <Router />
      <ModalRoot />
      <GlobalStyle />
    </RecoilRoot>
  );
};

export default App;
