import { render } from "@testing-library/react";
import styled from "styled-components";

export const TextField = styled.input<{ error?: boolean }>`
  font-size: 1rem;
  width: 100%;
  flex-grow: 1;
  padding: ${(props) => (props.type === "date" ? "10.6px 10px" : "10px 10px")};
  color: ${(props) => (props.error ? "red" : "black")};
  border: 1px solid ${(props) => (props.error ? "red" : "black")};
  border-radius: 3px;
  outline: none;
  &:focus {
    padding: ${(props) => (props.type === "date" ? "9.6px 9px" : "9px 9px")};
    border: 2px solid ${(props) => (props.error ? "red" : "black")};
    transition: 0.1s;
  }
  &:not(:focus) {
    transition: 0.1s;
  }
`;
export const TextFieldContainer = styled.div<{ fullWidth?: boolean }>`
  padding: 2px 2px 2px 2px;
  display: flex;
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
