import { ProfileButton } from '../../components/constants';
import { Search } from './components/constants';
import { TopBarWrapper } from './top-bar.styled';

export const TopBar = () => {
  return (
    <TopBarWrapper>
      <Search />
      <ProfileButton />
    </TopBarWrapper>
  );
};
