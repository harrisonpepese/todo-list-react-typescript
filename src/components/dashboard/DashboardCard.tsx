import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  IconButton,
  LinearProgress,
  Typography,
} from "@mui/material";
import { TodoList } from "../../entities/todoList";
import dayjs from "dayjs";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, SxProps } from "@mui/system";
import TodoListHelper from "../../utils/todoListHelper";

export default function DashboardCard(props: {
  todoList: TodoList;
  onClick: () => void;
  onDelete: () => void;
}) {
  const sx: SxProps = {
    minWidth: 275,
  };
  const { todoList } = props;
  const { isComplete, progress, completedTasks, status } =
    TodoListHelper.getOverview(todoList);
  return (
    <Card sx={sx}>
      <CardMedia
        component="div"
        sx={{
          backgroundColor: (theme) =>
            isComplete
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
        <IconButton size="small" onClick={() => props.onDelete()}>
          <DeleteIcon sx={{ color: "white" }} />
        </IconButton>
        <IconButton size="small" onClick={() => props.onClick()}>
          <OpenInFullIcon sx={{ color: "white" }} />
        </IconButton>
      </CardMedia>
      <CardActionArea>
        <CardContent>
          <Typography variant="h5">{props.todoList.title}</Typography>
          <Typography variant="body2">
            Due date: {dayjs(todoList.dueDate).format("DD/MM/YYYY")}
          </Typography>

          <Typography variant="body2">
            Tasks: {completedTasks}/{todoList.tasks.length}
          </Typography>
          <LinearProgress
            color={isComplete ? "success" : "primary"}
            variant="determinate"
            value={progress}
          ></LinearProgress>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
