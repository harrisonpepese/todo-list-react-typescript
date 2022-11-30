import InputHelper from "./inputHelper";
import React from "react";
const callback = jest.fn();
describe("submitOnEnter", () => {
  it("submit", () => {
    InputHelper.submitOnEnter(
      { key: "Enter" } as React.KeyboardEvent<HTMLDivElement>,
      callback
    );
    expect(callback).toBeCalledTimes(1);
  });
});
