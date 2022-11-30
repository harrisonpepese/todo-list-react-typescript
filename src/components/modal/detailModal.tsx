import {
  Button,
  CardContent,
  CardMedia,
  Grid,
  LinearProgress,
  Modal,
  SxProps,
  TextField,
  Typography,
} from "@mui/material";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import { Box } from "@mui/system";
import { useState } from "react";
import { Task } from "../../entities/task";
import { TodoList } from "../../entities/todoList";
import TodoListHelper from "../../utils/todoListHelper";
import TaskList from "../createTodoList/TaskList";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import { ConfirmModal } from "./ConfirmModal";
import dayjs from "dayjs";

const modalSx: SxProps = {
  width: "70%",
  height: "85%",
  position: "absolute",
  bottom: "50%",
  right: "50%",
  transform: "translate(50%,50%)",
};

export interface DetailModalData {
  index: number;
  todoList: TodoList;
}
export default function DetailModal(props: {
  data: DetailModalData;
  open: boolean;
  onDelete: (index: number) => void;
  onClose: () => void;
  onChange: (item: TodoList, index?: number) => void;
}) {
  const navigate = useNavigate();
  const { data, open } = props;
  const { index, todoList } = data;
  const [newTask, setNewTask] = useState("");
  const [isDeleteOpen, setDeleteOpen] = useState({
    open: false,
    index,
  });
  const { progress, status } = TodoListHelper.getOverview(todoList);

  const gotoEdit = () => {
    props.onClose();
    navigate(`/update/${index}`);
  };
  const onTaskChange = (tasks: Task[]) => {
    props.onChange({ ...todoList, tasks }, index);
  };
  const onAddTask = () => {
    if (newTask) {
      setNewTask("");
      onTaskChange([...todoList.tasks, { done: false, description: newTask }]);
    }
  };
  const handleClose = () => {
    props.onClose();
  };
  return (
    <Modal open={open} onClose={handleClose}>
      <Card sx={modalSx}>
        <CardMedia
          component="div"
          sx={{
            backgroundColor: (theme) =>
              status === "Completed"
                ? theme.palette.success.main
                : theme.palette.primary.main,
            padding: 1,
            color: "white",
            display: "flex",
          }}
        >
          <Box flexGrow={1} display="flex" alignItems="center">
            <Typography variant="h6">{status}</Typography>
          </Box>
          <IconButton
            data-testid="detailmodal-deletebutton"
            size="small"
            onClick={() => setDeleteOpen({ ...isDeleteOpen, open: true })}
          >
            <DeleteIcon sx={{ color: "white" }} />
          </IconButton>
          <IconButton
            size="small"
            data-testid="detailmodal-editbutton"
            onClick={gotoEdit}
          >
            <EditIcon sx={{ color: "white" }} />
          </IconButton>
          <IconButton
            size="small"
            data-testid="detailmodal-closebutton"
            onClick={handleClose}
          >
            <CloseIcon sx={{ color: "white" }} />
          </IconButton>
        </CardMedia>
        <CardContent sx={{ overflow: "auto", height: "100%" }}>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item xs={12}>
              <Typography variant="h4" data-testid="detailmodal-title">
                {todoList.title}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="caption" data-testid="detailmodal-duedate">
                Due date: {dayjs(todoList.dueDate).format("DD/MM/YYYY")}
              </Typography>
            </Grid>
            <Grid sx={{ textAlign: "center" }} item xs={12}>
              <Typography variant="h6">Tasks</Typography>
            </Grid>
            <Grid item xs={12} marginBottom={1}>
              <LinearProgress
                color={status === "Completed" ? "success" : "primary"}
                variant="determinate"
                value={progress}
              ></LinearProgress>
            </Grid>
            <Grid item xs={8}>
              <TextField
                data-testid="detailmodal-input"
                fullWidth
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                variant="standard"
                placeholder="Task description"
              ></TextField>
            </Grid>
            <Grid item>
              <Button
                data-testid="detailmodal-inputSubmit"
                onClick={onAddTask}
                variant="contained"
              >
                Add Task
              </Button>
            </Grid>
            <Grid item xs={12}>
              <TaskList tasks={todoList.tasks} onChange={onTaskChange} />
            </Grid>
          </Grid>
        </CardContent>
        <ConfirmModal
          open={isDeleteOpen.open}
          index={isDeleteOpen.index}
          message="Do you wanna delete this?"
          onSubmit={(index: number) => {
            props.onDelete(index);
            props.onClose();
          }}
          onClose={() => setDeleteOpen({ ...isDeleteOpen, open: false })}
        />
      </Card>
    </Modal>
  );
}
