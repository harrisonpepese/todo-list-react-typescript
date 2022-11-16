import { Task } from "./task";

export type TodoList = {
  title: string;
  dueDate: string;
  tasks: Task[];
};
