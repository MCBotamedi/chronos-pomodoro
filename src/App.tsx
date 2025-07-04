import { Container } from './components/Container';
import { Menu } from './components/Menu';
import { Logo } from './components/Logo';

import './styles/theme.css';
import './styles/global.css';

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Menu />
      </Container>
    </>
  );
}
