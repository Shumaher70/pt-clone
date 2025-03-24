import ErrorPage from './error-page';

export const errorRoutes = [
  {
    path: '*',
    element: <ErrorPage />,
  },
];
