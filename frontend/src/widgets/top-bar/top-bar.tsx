import { ProfileButton } from '../../components/constants';
import { Search } from './components/constants';
import * as S from './top-bar.styled';

export const TopBar = () => {
  return (
    <S.Wrapper>
      <Search />
      <ProfileButton />
    </S.Wrapper>
  );
};
