import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const IconButton = styled(BaseButton)`
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  width: 40px;
  height: 40px;
  padding: 1rem;
  &:hover svg {
    color: black;
  }
  svg {
    color: grey;
  }
`;
