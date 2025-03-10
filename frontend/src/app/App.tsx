import { AppContent, AppWrapper } from './app.styled';

import { Gallery, LeftBar, TopBar } from '../widgets/constants';

import './../app.css';

function App() {
  return (
    <AppWrapper>
      <LeftBar />

      <AppContent>
        <TopBar />
        <Gallery />
      </AppContent>
    </AppWrapper>
  );
}

export default App;
