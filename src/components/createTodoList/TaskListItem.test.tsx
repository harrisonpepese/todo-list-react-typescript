import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { Task } from "../../entities/task";
import { TaskListItem } from "./TaskListItem";

describe("TaskListItem Test", () => {
  const task: Task = {
    description: "test",
    done: false,
  };
  const index = 0;
  let onChangeRes: any;
  let deleteRes: any;
  beforeEach(() => {
    cleanup();
    render(
      <TaskListItem
        task={task}
        index={index}
        onChange={(index, value) => {
          onChangeRes = { index, value };
        }}
        onDelete={(index) => {
          deleteRes = index;
        }}
      />
    );
  });

  it("render", () => {
    const checked = screen
      .getByTestId("tasklistitem-checkbox")
      .querySelector('input[type="checkbox"]');
    expect(checked).toHaveProperty("checked", task.done);
    expect(screen.getByTestId("tasklistitem-text")).toHaveTextContent(
      task.description
    );
  });
  it("click deleteButton", () => {
    const button = screen.getByTestId("tasklistitem-deletebutton");
    fireEvent.click(button);
    expect(deleteRes).toBe(index);
  });
  it("click text", () => {
    const text = screen.getByTestId("tasklistitem-text");
    fireEvent.click(text);
    const textfield = screen
      .getByTestId("tasklistitem-textfield")
      .querySelector("input");
    expect(textfield).toBeDefined();
    expect(textfield?.getAttribute("value")).toBe(task.description);
  });
});
