import { useRoutes } from 'react-router';

import {
  authRoutes,
  homeRoutes,
  postRoutes,
  errorRoutes,
  createRoutes,
  searchRoutes,
  profileRoutes,
} from '../pages/constants';

export const AppRoutes = () => {
  const routes = [
    ...authRoutes,
    ...homeRoutes,
    ...postRoutes,
    ...errorRoutes,
    ...createRoutes,
    ...searchRoutes,
    ...profileRoutes,
  ];

  return useRoutes(routes);
};
