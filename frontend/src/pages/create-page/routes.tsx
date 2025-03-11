import CreatePage from './create-page';
import LayoutApp from '../layouts/layout-app/layout-app';

export const createRoutes = [
  {
    path: '/create',
    element: <LayoutApp />,
    children: [{ path: '', element: <CreatePage /> }],
  },
];
