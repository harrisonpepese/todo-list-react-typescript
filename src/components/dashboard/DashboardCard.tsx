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
import { SpaceBettewnText } from "../textContainers/SpaceBeteewnText";

export default function DashboardCard(props: {
  todoList: TodoList;
  onClick: () => void;
  onDelete: () => void;
}) {
  const sx: SxProps = {
    minWidth: 275,
  };
  const { todoList } = props;
  const { progress, completedTasks, status } =
    TodoListHelper.getOverview(todoList);
  return (
    <Card sx={sx}>
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
          size="small"
          data-testid="dashboardcard-deletebutton"
          onClick={() => props.onDelete()}
        >
          <DeleteIcon sx={{ color: "white" }} />
        </IconButton>
        <IconButton
          size="small"
          data-testid="dashboardcard-detailbutton"
          onClick={() => props.onClick()}
        >
          <OpenInFullIcon sx={{ color: "white" }} />
        </IconButton>
      </CardMedia>
      <CardActionArea onClick={props.onClick}>
        <CardContent>
          <Typography variant="h5" data-testid="dashboardcard-text">
            {props.todoList.title}
          </Typography>
          <SpaceBettewnText>
            <Typography variant="body2">Due date:</Typography>
            <Typography variant="body2" data-testid="dashboardcard-date">
              {dayjs(todoList.dueDate).format("DD/MM/YYYY")}
            </Typography>
          </SpaceBettewnText>
          <SpaceBettewnText
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Typography variant="body2">Tasks:</Typography>
            <Typography variant="body2" data-testid="dashboardcard-task">
              {completedTasks}/{todoList.tasks.length}
            </Typography>
          </SpaceBettewnText>
          <LinearProgress
            color={status === "Completed" ? "success" : "primary"}
            variant="determinate"
            value={progress}
          ></LinearProgress>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
