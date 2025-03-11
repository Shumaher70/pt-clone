import HomePage from './home-page';
import LayoutApp from '../layouts/layout-app/layout-app';

export const homeRoutes = [
  {
    path: '/',
    element: <LayoutApp />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
    ],
  },
];
