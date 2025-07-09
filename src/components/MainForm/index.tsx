import type { HomeProps } from '../../pages/Home';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';
import { PlayCircleIcon } from 'lucide-react';

export function MainForm({ state }: HomeProps) {
  function handleClick() {
    setState(prevState => {
      return {
        ...prevState,
        config: {
          ...prevState.config,
          workTime: 34,
        },
        formattedSecondsRemaining: '23:34',
      };
    });
  }
  return (
    <form className='form' action=''>
      <div>
        <button type='button' onClick={handleClick}>
          clicar
        </button>
      </div>
      <div className='formRow'>
        <DefaultInput
          labelText='task'
          id='meuInput'
          type='text'
          placeholder='Digite algo...'
        />
      </div>

      <div className='formRow'>
        <p>Lorem ipsum dolor sit amet{state.config.workTime} min</p>
      </div>

      <div className='formRow'>
        <Cycles />
      </div>

      <div className='formRow'>
        <DefaultButton icon={<PlayCircleIcon />} />
      </div>
    </form>
  );
}
