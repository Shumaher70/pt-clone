import LayoutApp from '../layouts/layout-app/layout-app';
import SearchPage from './search-page';

export const searchRoutes = [
  {
    path: '/:username',
    element: <LayoutApp />,
    children: [{ path: '', element: <SearchPage /> }],
  },
];
