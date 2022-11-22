import { render, screen } from "@testing-library/react";
import PageTitle from "./pageTitle";

test("render with child", () => {
  const title = "hello";
  render(<PageTitle>{title}</PageTitle>);
  expect(screen.getByTestId("page-title")).toHaveTextContent(title);
});
