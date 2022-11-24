import { cleanup, render, screen } from "@testing-library/react";
import { Task } from "../../entities/task";
import TaskList from "./TaskList";

describe("Task List Tests", () => {
  afterEach(cleanup);
  const empty: Task[] = [];
  const tasks: Task[] = [
    {
      description: "test",
      done: false,
    },
    {
      description: "test",
      done: false,
    },
  ];
  it("render empty", () => {
    render(<TaskList tasks={empty} onChange={() => {}} />);
    const element = screen.getByTestId("tasklist-emptyitem");
    expect(element).toHaveTextContent("No tasks to show");
  });
  it("render withTask", () => {
    render(<TaskList tasks={tasks} onChange={() => {}} />);
    const elements = screen.getAllByTestId("tasklist-item");
    expect(elements.length).toBe(tasks.length);
  });
});
