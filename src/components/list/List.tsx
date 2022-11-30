import styled from "styled-components";

export const List = styled.ul`
  list-style-type: none;
  li:first-child {
    border: 1px solid rgb(0, 0, 0, 0.1);
    border-radius: 3px 3px 0px 0px;
  }
  li {
    border-style: solid;
    border-color: rgb(0, 0, 0, 0.1);
    border-width: 0px 1px 0px 1px;
  }
  li:last-child {
    border: 1px solid rgb(0, 0, 0, 0.1);
    border-radius: 0px 0px 3px 3px;
  }
`;
export const ListItemIcon = styled.div`
  margin-right: 1rem;
`;
export const ListItemAction = styled.div`
  margin-left: auto;
`;
export const ListItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  padding: 10px;
`;
