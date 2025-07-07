import type { TaskStateModel } from "./TaskStateModel";

export type TaskModel = {
  id: string;
  name: string;
  duration: number;
  startDate: number;
  completeDate: number | null; // quando o timrer chega ao final
  interruptDate: number | null; // quando o task for interrompida
  type: keyof TaskStateModel['config'];
  //type: 'workTime' | 'shortBreakTime' | 'longTime';

};

