import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ErrorPage, LoginPage, MainPage } from '@/pages';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/error' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
