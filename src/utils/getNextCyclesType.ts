import type { TaskModel } from "../models/TaskModel";

export function getNextCycleType(curentCycle:number): TaskModel['type']{
  if(curentCycle % 8 === 0) return 'longBreakTime';
  if(curentCycle % 2 === 0) return 'shortBreakTime';
  return 'workTime';

}