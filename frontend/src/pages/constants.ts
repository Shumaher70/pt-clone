import AuthPage from './auth-page/auth-page';
import HomePage from './home-page/home-page';
import PostPage from './post-page/post-page';
import CreatePage from './create-page/create-page';
import SearchPage from './search-page/search-page';
import ProfilePage from './profile-page/profile-page';

import { authRoutes } from './auth-page/routes';
import { homeRoutes } from './home-page/routes';
import { postRoutes } from './post-page/routes';
import { createRoutes } from './create-page/routes';
import { searchRoutes } from './search-page/routes';
import { errorRoutes } from './layouts/error/routes';
import { profileRoutes } from './profile-page/routes';

import ErrorPage from './layouts/error/error-page';
import LayoutApp from './layouts/layout-app/layout-app';
import LoadingPage from './layouts/loading/loading-page';

export default {
  AuthPage,
  HomePage,
  PostPage,
  ErrorPage,
  LayoutApp,
  CreatePage,
  SearchPage,
  ProfilePage,
  LoadingPage,
};

export {
  authRoutes,
  homeRoutes,
  postRoutes,
  errorRoutes,
  createRoutes,
  searchRoutes,
  profileRoutes,
};
