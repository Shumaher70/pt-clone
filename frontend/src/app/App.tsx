import * as S from './app.styled';

import { Gallery, LeftBar, TopBar } from '../widgets/constants';

import './../app.css';

function App() {
  return (
    <S.Wrapper>
      <LeftBar />
      <S.Content>
        <TopBar />
        <Gallery />
      </S.Content>
    </S.Wrapper>
  );
}

export default App;
