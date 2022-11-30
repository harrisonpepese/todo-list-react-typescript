import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { click } from "@testing-library/user-event/dist/click";
import { ConfirmModal } from "./ConfirmModal";
const mockOnclose = jest.fn();
const mockOnSubmit = jest.fn();
const mockMessage = "mock Message";
describe("text confirm modal", () => {
  beforeEach(() => {
    cleanup();
    mockOnclose.mockReset();
    mockOnSubmit.mockReset();
    render(
      <ConfirmModal
        open={true}
        index={0}
        message={mockMessage}
        onSubmit={mockOnSubmit}
        onClose={mockOnclose}
      />
    );
  });
  it("render", () => {
    expect(screen.getByTestId("confirmmodal-text")).toHaveTextContent(
      mockMessage
    );
    expect(screen.getByTestId("confirmmodal-cancelbutton")).toBeDefined();
    expect(screen.getByTestId("confirmmodal-submitbutton")).toBeDefined();
  });
  it("cancel click", () => {
    const button = screen.getByTestId("confirmmodal-cancelbutton");
    fireEvent.click(button);
    expect(mockOnclose).toBeCalledTimes(1);
    expect(mockOnSubmit).toBeCalledTimes(0);
  });
  it("submit click", () => {
    const button = screen.getByTestId("confirmmodal-submitbutton");
    fireEvent.click(button);
    expect(mockOnclose).toBeCalledTimes(1);
    expect(mockOnSubmit).toBeCalledTimes(1);
  });
});
