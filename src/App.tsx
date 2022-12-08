import { RecoilRoot } from 'recoil';

import GlobalStyle from './styles/global';

import Router from '@/routes';

import '@/styles/font.css';

const App = () => {
  return (
    <RecoilRoot>
      <Router />
      <GlobalStyle />
    </RecoilRoot>
  );
};

export default App;
