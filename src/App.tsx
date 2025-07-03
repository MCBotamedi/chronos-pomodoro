import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';
import { TimerIcon } from 'lucide-react';

export function App() {
  console.log('Oi');

  return (
    <>
      <Heading>
        Olá Mundo!
        <button>
          <TimerIcon />
        </button>
      </Heading>

      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi,
        iste laudantium. Aliquid commodi dicta fugiat doloremque ipsum
        consequatur esse obcaecati cupiditate beatae quibusdam natus, harum
        libero, ab temporibus, fuga hic!
      </p>
    </>
  );
}
