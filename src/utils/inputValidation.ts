export type InputRuleResponse = {
  error: boolean;
  hint?: string;
};
export type InputState = {
  value: string;
  hint: string;
  error: boolean;
  rules: any[];
  minLenght: number;
};

export function InputHandler(
  curretState: InputState,
  targetValue: string
): InputState {
  const validations = curretState.rules.map((x) =>
    x(targetValue, curretState.minLenght)
  );
  const error = validations.find((x) => x.error === true);
  if (error) {
    return {
      ...curretState,
      hint: error.hint,
      error: error.error,
      value: targetValue,
    };
  }
  return {
    ...curretState,
    hint: "",
    error: false,
    value: targetValue,
  };
}

export function required(value: string): InputRuleResponse {
  if (!value) {
    return { error: true, hint: "O campo é obrigatório." };
  }
  return { error: false };
}
export function minLength(
  value: string,
  length: number = 3
): InputRuleResponse {
  if (value.length < length) {
    return {
      error: true,
      hint: `O campo precisa de no mínimo ${length} caracteres.`,
    };
  }
  return { error: false };
}
