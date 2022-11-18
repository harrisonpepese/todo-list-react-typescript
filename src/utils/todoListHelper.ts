import { TodoList } from "../entities/todoList";

export default class TodoListHelper {
  static getOverview(todoList: TodoList) {
    const taskLength = todoList.tasks.length;
    const completedTasks = todoList.tasks.filter((x) => x.done).length;
    return {
      status: this.getStatus(completedTasks, taskLength),
      completedTasks,
      isComplete: completedTasks === taskLength,
      progress: Math.round((completedTasks / todoList.tasks.length) * 100),
    };
  }
  static getStatus(completedTasks: number, task: number) {
    if (completedTasks === 0) {
      return "Not started";
    } else if (completedTasks === task) {
      return "Completed";
    } else {
      return "In progress";
    }
  }
}
