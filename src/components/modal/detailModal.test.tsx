/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/no-node-access */
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import dayjs from "dayjs";
import { MemoryRouter } from "react-router-dom";
import DetailModal, { DetailModalData } from "./detailModal";

const mockedNavigate = jest.fn();
const mockOnDelete = jest.fn();
const mockOnChange = jest.fn();
const mockOnClose = jest.fn();
jest.mock("react-router-dom", () => {
  const actualNav = jest.requireActual("react-router-dom");
  return {
    ...actualNav,
    useNavigate: () => mockedNavigate,
  };
});

describe("Detail Modal Test", () => {
  const data: DetailModalData = {
    index: 0,
    todoList: {
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
    },
  };
  beforeEach(() => {
    jest.resetAllMocks();
    cleanup();
    render(
      <MemoryRouter>
        <DetailModal
          data={data}
          onChange={mockOnChange}
          onClose={mockOnClose}
          onDelete={mockOnDelete}
          open={true}
        />
      </MemoryRouter>
    );
  });
  it("Render", () => {
    expect(screen.getByTestId("detailmodal-title")).toHaveTextContent(
      data.todoList.title
    );
    expect(screen.getByTestId("detailmodal-duedate")).toHaveTextContent(
      `Due date: ${dayjs(data.todoList.dueDate).format("DD/MM/YYYY")}`
    );
    expect(screen.getAllByTestId("tasklist-item").length).toBe(
      data.todoList.tasks.length
    );
  });
  it("test delete", () => {
    const button = screen.getByTestId("detailmodal-deletebutton");
    fireEvent.click(button);
    fireEvent.click(screen.getByTestId("confirmmodal-submitbutton"));
    expect(mockOnDelete).toBeCalledTimes(1);
    expect(mockOnDelete).toHaveBeenCalledWith(data.index);
  });
  it("test edit", () => {
    const button = screen.getByTestId("detailmodal-editbutton");
    fireEvent.click(button);
    expect(mockedNavigate).toBeCalledTimes(1);
  });
  it("test onChange", () => {
    const textField = screen.getByTestId("detailmodal-input");
    const input = textField.querySelector("input");
    if (input) {
      fireEvent.change(input, {
        target: { value: "hello" },
      });
      fireEvent.click(screen.getByTestId("detailmodal-inputSubmit"));
    }
    expect(mockOnChange).toBeCalledTimes(1);
  });
  it("test onClose", () => {
    const button = screen.getByTestId("detailmodal-closebutton");
    fireEvent.click(button);
    expect(mockOnClose).toBeCalledTimes(1);
  });
});
