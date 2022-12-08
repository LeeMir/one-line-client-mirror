import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { MainPage } from '@/pages';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
