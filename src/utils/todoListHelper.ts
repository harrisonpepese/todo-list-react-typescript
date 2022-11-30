import { Task } from "../entities/task";
import { TodoList } from "../entities/todoList";

export default class TodoListHelper {
  static getOverview(todoList: TodoList) {
    const completedTasks = this.getCompletedTasks(todoList.tasks);
    return {
      status: this.getStatus(todoList.tasks),
      completedTasks,
      progress: Math.round((completedTasks / todoList.tasks.length) * 100),
    };
  }
  static getCompletedTasks(tasks: Task[]) {
    return tasks.filter((x) => x.done).length;
  }
  static getStatus(tasks: Task[]) {
    const completedTasks = this.getCompletedTasks(tasks);
    if (completedTasks === 0) {
      return "Not started";
    } else if (completedTasks === tasks.length) {
      return "Completed";
    } else {
      return "In progress";
    }
  }
}
