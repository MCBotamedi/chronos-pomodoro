import { Container } from './components/Container';
import { Menu } from './components/Menu';
import { Logo } from './components/Logo';
import { CountDown } from './components/CountDown';
import { Cycles } from './components/Cycles';
import { DefaultInput } from './components/DefaultInput';
import { DefaultButton } from './components/DefaultButton';
import { Footer } from './components/Footer';

import './styles/theme.css';
import './styles/global.css';
import { PlayCircleIcon } from 'lucide-react';

import { Heading } from './components/Heading';
import { useState } from 'react';

export function App() {
  // Que todos os componentes que usam "numero"
  //saibam das mudanças em seu valor.
  //Sempre que eu usar useState, não vou usar atribuição diretamente.
  //const [numero, setNumero] = useState(() => {
  // console.log('Lazy initialization');
  // return 0;
  //});
  const [numero, setNumero] = useState(0);

  function handleClick() {
    // setNumero(prevState => prevState + 1); // Atualiza o estado com base no valor anterior
    setNumero(1);
  }

  return (
    <>
      <Heading>Numero: {numero}</Heading>
      <button onClick={handleClick}>Aumenta</button>

      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <form className='form' action=''>
          <div className='formRow'>
            <DefaultInput
              labelText={numero.toString()}
              id='meuInput'
              type='text'
              placeholder='Digite algo...'
            />
          </div>

          <div className='formRow'>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className='formRow'>
            <Cycles />
          </div>

          <div className='formRow'>
            <DefaultButton icon={<PlayCircleIcon />} color='green' />
          </div>
        </form>
      </Container>

      <Container>
        <Footer />
      </Container>
    </>
  );
}
