import styled from "styled-components";

export const BaseButton = styled.button<{
  variant?: string;
  fullWidth?: boolean;
}>`
  font-size: 1em;
  width: ${(props) => (props.fullWidth ? "100%" : "")};
  background: white;
  padding: 0.5em 2em;
  border: none;
  border-radius: 4px;
  &:hover {
    box-shadow: 2px 2px 3px 3px rgb(0, 0, 0, 0.2);
    transition: 0.2s;
  }
  &:not(:hover) {
    transition: 0.2s;
  }
`;
