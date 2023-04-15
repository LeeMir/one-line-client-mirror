import { createBrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';

import Root from '@/Root';
import { ErrorPage, LoadingPage, MainPage } from '@/pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: (
          <Suspense fallback={<LoadingPage />}>
            <MainPage />
          </Suspense>
        ),
        errorElement: <ErrorPage />,
      },
      {
        path: '/login',
        element: (
          <Suspense fallback={<LoadingPage />}>
            <MainPage />
          </Suspense>
        ),
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

export default router;
