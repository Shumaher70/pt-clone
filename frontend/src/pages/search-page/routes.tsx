import LayoutApp from '../layouts/layout-app/layout-app';
import SearchPage from './search-page';

export const searchRoutes = [
  {
    path: '/search',
    element: <LayoutApp />,
    children: [{ path: '', element: <SearchPage /> }],
  },
];
