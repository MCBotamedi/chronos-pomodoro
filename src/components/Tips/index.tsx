import { useTaskContext } from "../../contexts/TaskContext/usetaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCyclesType";

export function Tips(){

  const { state } = useTaskContext();

  // ciclos
    const nextCycle = getNextCycle(state.currentCycle);
    const nextCycleType = getNextCycleType(nextCycle);

  //Tips
  const tipsforWhenActiveTask = {
    workTime: <span>Foque por {state.config.workTime} min</span>,
    breakTime: <span>Descanse por {state.config.shortBreakTime} min</span>,
    longBreak: <span>Descanso longo </span>,
  };

  const tipsforNoActiveTask = {
    workTime: <span>Próximo ciclo é de {state.config.workTime} min</span>,
    breakTime: (
      <span>Próximo ciclo é de {state.config.shortBreakTime} min</span>
    ),
    longBreak: <span>Próximo descanso será longo </span>,
  };

  return(
    <>
      {!!state.activeTask && tipsforWhenActiveTask[state.activeTask.type]}
      {!state.activeTask && tipsforNoActiveTask[nextCycleType]}
    </>
  );
}