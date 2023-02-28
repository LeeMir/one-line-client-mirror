import { createBrowserRouter } from 'react-router-dom';

import Root from '@/Root';
import { ErrorPage, LoginPage, MainPage } from '@/pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <MainPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/login',
        element: <LoginPage />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

export default router;
