import { render } from "@testing-library/react";
import styled from "styled-components";

export const TextField = styled.input<{ error?: boolean }>`
  font-size: 1.2em;
  width: 100%;
  padding: 0.5em 0.5em;
  color: ${(props) => (props.error ? "red" : "black")};
  border: 1px solid ${(props) => (props.error ? "red" : "black")};
  border-radius: 3px;
  outline: none;
  &:focus {
    border: 2px solid ${(props) => (props.error ? "red" : "black")};
    transition: 0.1s;
  }
  &:not(:focus) {
    transition: 0.1s;
  }
`;
export const TextFieldContainer = styled.div<{ fullWidth?: boolean }>`
  padding: 2px;
  width: ${(props) => (props.fullWidth ? "100%" : "")};
`;
export const HintText = styled.div<{ error?: boolean }>`
  color: ${(props) => (props.error ? "red" : "black")};
  font-size: 0.8em;
`;

interface InputFieldProps extends React.InputHTMLAttributes<any> {
  error?: boolean;
  hint?: string;
  fullWidth?: boolean;
}

export default function InputField(props: InputFieldProps) {
  const { error, hint, fullWidth, ...inputProps } = props;
  return (
    <TextFieldContainer fullWidth={fullWidth}>
      <TextField error={error} {...inputProps} />
      <HintText error={error}>{hint}</HintText>
    </TextFieldContainer>
  );
}
