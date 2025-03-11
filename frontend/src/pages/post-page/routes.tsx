import PostPage from './post-page';
import LayoutApp from '../layouts/layout-app/layout-app';

export const postRoutes = [
  {
    path: '/pin/:id',
    element: <LayoutApp />,
    children: [{ path: '', element: <PostPage /> }],
  },
];
