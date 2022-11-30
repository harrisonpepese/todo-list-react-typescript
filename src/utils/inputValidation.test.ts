import {
  InputHandler,
  InputState,
  minLength,
  required,
} from "./inputValidation";

describe("inputHandler", () => {
  const inputState: InputState = {
    value: "hello",
    hint: "",
    error: false,
    rules: [required, minLength],
    minLenght: 3,
  };
  it("valid", () => {
    const result = InputHandler(inputState, "hello :)");
    expect(result.value).toBe("hello :)");
    expect(result.error).toBeFalsy();
    expect(result.hint).toBe("");
  });
  it("invalid required", () => {
    const result = InputHandler(inputState, "");
    expect(result.value).toBe("");
    expect(result.error).toBeTruthy();
    expect(result.hint).toBe("O campo é obrigatório.");
  });
  it("invalid lenght", () => {
    const result = InputHandler(inputState, "hi");
    expect(result.value).toBe("hi");
    expect(result.error).toBeTruthy();
    expect(result.hint).toBe("O campo precisa de no mínimo 3 caracteres.");
  });
});
describe("required", () => {
  it("valid", () => {
    const result = required("hello");
    expect(result.error).toBeFalsy();
    expect(result.hint).toBeUndefined();
  });
  it("invalid", () => {
    const result = required("");
    expect(result.error).toBeTruthy();
    expect(result.hint).toBeDefined();
  });
});
describe("minLength", () => {
  it("valid", () => {
    const result = minLength("hello");
    expect(result.error).toBeFalsy();
    expect(result.hint).toBeUndefined();
  });
  it("valid 4", () => {
    const result = minLength("hello", 4);
    expect(result.error).toBeFalsy();
    expect(result.hint).toBeUndefined();
  });
  it("invalid", () => {
    const result = minLength("hi");
    expect(result.error).toBeTruthy();
    expect(result.hint).toBeDefined();
  });
});
