import { Task } from "./task";

export type TodoList = {
  title: string;
  dueDate: Date;
  tasks: Task[];
};
