import { TodoList } from "../entities/todoList";
import TodoListHelper from "./todoListHelper";

describe("getOverview", () => {
  const todoList: TodoList = {
    title: "mock",
    dueDate: "2022-11-25",
    tasks: [
      { description: "mock", done: true },
      { description: "mock", done: false },
    ],
  };
  const result = TodoListHelper.getOverview(todoList);
  expect(result.completedTasks).toBe(1);
  expect(result.progress).toBe(0.5);
  expect(result.status).toBe("In progress");
});

describe("getStatus", () => {
  it("Completed", () => {
    const tasks = [{ description: "mock", done: true }];
    const result = TodoListHelper.getStatus(tasks);
    expect(result).toBe("Completed");
  });
  it("In progress", () => {
    const tasks = [
      { description: "mock", done: true },
      { description: "mock", done: false },
    ];
    const result = TodoListHelper.getStatus(tasks);
    expect(result).toBe("In progress");
  });
  it("Not started", () => {
    const tasks = [{ description: "mock", done: false }];
    const result = TodoListHelper.getStatus(tasks);
    expect(result).toBe("Not started");
  });
});
describe("getCompletedTasks", () => {
  it("1", () => {
    const tasks = [
      { description: "mock", done: true },
      { description: "mock", done: false },
    ];
    const result = TodoListHelper.getCompletedTasks(tasks);
    expect(result).toBe(1);
  });
  it("0", () => {
    const tasks = [{ description: "mock", done: false }];
    const result = TodoListHelper.getCompletedTasks(tasks);
    expect(result).toBe(0);
  });
});
