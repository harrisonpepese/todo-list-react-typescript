import { List, Modal, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { TodoList } from "../../entities/todoList";

export default function DetailModal(props: {
  todoList: TodoList;
  open: boolean;
}) {
  const { todoList, open } = props;
  return (
    <Modal open={open}>
      <Paper>
        <Typography>{todoList.title}</Typography>
        <Typography>{todoList.dueDate}</Typography>
        <List></List>
      </Paper>
    </Modal>
  );
}
