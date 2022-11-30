import { render } from "@testing-library/react";
import styled from "styled-components";

export const Card = styled.div`
  box-shadow: 2px 2px 3px 3px rgb(0, 0, 0, 0.2);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;
export const CardMedia = styled.div`
  background: #297afb;
  color: white;
  border-radius: 10px 10px 0px 0px;
  padding: 10px;
`;
export const CardContent = styled.div`
  box-shadow: 2px 2px 3px 3px rgb(0, 0, 0, 0.2);

  padding: 10px;
`;
