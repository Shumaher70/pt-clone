import * as S from './layout-app.styled';

import { LeftBar, TopBar } from '../../../widgets/constants';
import { Outlet } from 'react-router';

function LayoutApp() {
  return (
    <S.Wrapper>
      <LeftBar />
      <S.Content>
        <TopBar />
        <Outlet />
      </S.Content>
    </S.Wrapper>
  );
}

export default LayoutApp;
