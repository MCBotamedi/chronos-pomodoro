import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';

export function App() {
  console.log('Oi');

  return (
    <div>
      <Heading attr={123} attr2='String'>
        Olá Mundo!
      </Heading>
      <Heading>Olá Mundo!2</Heading>
      <Heading>Cronos</Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi,
        iste laudantium. Aliquid commodi dicta fugiat doloremque ipsum
        consequatur esse obcaecati cupiditate beatae quibusdam natus, harum
        libero, ab temporibus, fuga hic!
      </p>
    </div>
  );
}
