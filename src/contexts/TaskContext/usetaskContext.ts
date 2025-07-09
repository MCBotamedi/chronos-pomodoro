import { useContext } from "react";
import { TaskContext } from "./TakdContext";

export function useTaskContext() {
  return useContext(TaskContext);
}
