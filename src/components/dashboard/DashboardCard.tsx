import {
  Card,
  CardContent,
  CardMedia,
  LinearProgress,
  Typography,
} from "@mui/material";
import { TodoList } from "../../entities/todoList";
import dayjs from "dayjs";

export default function DashboardCard(props: { todoList: TodoList }) {
  const tasksLen = props.todoList.tasks.length;
  const completeDTasks = props.todoList.tasks.filter((x) => x.done).length;
  const isComplete = tasksLen === completeDTasks;
  const progress = Math.round((completeDTasks / tasksLen) * 100);
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardMedia
        component="div"
        sx={{
          backgroundColor: (theme) =>
            isComplete
              ? theme.palette.success.main
              : theme.palette.primary.main,
          padding: 1,
          color: "white",
          height: 5,
        }}
      ></CardMedia>
      <CardContent>
        <Typography variant="h5">{props.todoList.title}</Typography>
        <Typography variant="body2">
          Due date: {dayjs(props.todoList.dueDate).format("DD/MM/YYYY")}
        </Typography>
        <Typography variant="body2">
          status: {isComplete ? "complete" : "in progess"}
        </Typography>
        <Typography variant="body2">
          task: {completeDTasks}/{tasksLen}
        </Typography>
        <LinearProgress
          color={isComplete ? "success" : "primary"}
          variant="determinate"
          value={progress}
        ></LinearProgress>
      </CardContent>
    </Card>
  );
}
