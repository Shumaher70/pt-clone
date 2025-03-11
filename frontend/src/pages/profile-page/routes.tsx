import LayoutApp from '../layouts/layout-app/layout-app';
import ProfilePage from './profile-page';

export const profileRoutes = [
  {
    path: '/:username',
    element: <LayoutApp />,
    children: [{ path: '', element: <ProfilePage /> }],
  },
];
