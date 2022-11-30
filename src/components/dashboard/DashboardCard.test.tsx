import { fireEvent, render, screen } from "@testing-library/react";
import dayjs from "dayjs";
import { TodoList } from "../../entities/todoList";
import TodoListHelper from "../../utils/todoListHelper";
import DashboardCard from "./DashboardCard";
const mockOnDelete = jest.fn();
const mockOnClick = jest.fn();
describe("Dashboard Card test", () => {
  const todoList: TodoList = {
    title: "Title",
    dueDate: "2022-11-25",
    tasks: [
      {
        description: "mock task",
        done: true,
      },
      {
        description: "mock task",
        done: false,
      },
    ],
  };
  it("render", () => {
    render(
      <DashboardCard
        todoList={todoList}
        onClick={mockOnClick}
        onDelete={mockOnDelete}
      />
    );
    const { completedTasks } = TodoListHelper.getOverview(todoList);
    expect(screen.getByTestId("dashboardcard-text")).toHaveTextContent(
      todoList.title
    );
    expect(screen.getByTestId("dashboardcard-date")).toHaveTextContent(
      dayjs(todoList.dueDate).format("DD/MM/YYYY")
    );
    expect(screen.getByTestId("dashboardcard-task")).toHaveTextContent(
      `${completedTasks}/${todoList.tasks.length}`
    );
    expect(screen.getByTestId("dashboardcard-task")).toHaveTextContent(
      `${completedTasks}/${todoList.tasks.length}`
    );
    expect(screen.getByTestId("dashboardcard-deletebutton")).toBeDefined();
    expect(screen.getByTestId("dashboardcard-detailbutton")).toBeDefined();
  });
  it("click delete", () => {
    render(
      <DashboardCard
        todoList={todoList}
        onClick={mockOnClick}
        onDelete={mockOnDelete}
      />
    );
    const button = screen.getByTestId("dashboardcard-deletebutton");
    fireEvent.click(button);
    expect(mockOnDelete).toBeCalledTimes(1);
  });
  it("click detail", () => {
    render(
      <DashboardCard
        todoList={todoList}
        onClick={mockOnClick}
        onDelete={mockOnDelete}
      />
    );
    const button = screen.getByTestId("dashboardcard-detailbutton");
    fireEvent.click(button);
    expect(mockOnClick).toBeCalledTimes(1);
  });
});
