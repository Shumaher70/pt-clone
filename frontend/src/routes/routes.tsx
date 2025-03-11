import { useRoutes } from 'react-router';
import {
  authRoutes,
  homeRoutes,
  postRoutes,
  createRoutes,
  searchRoutes,
  profileRoutes,
} from '../pages/constants';

export const AppRoutes = () => {
  const routes = [
    ...authRoutes,
    ...homeRoutes,
    ...postRoutes,
    ...createRoutes,
    ...searchRoutes,
    ...profileRoutes,
  ];

  return useRoutes(routes);
};
