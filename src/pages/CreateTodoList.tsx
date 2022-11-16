import {
  Box,
  Button,
  Checkbox,
  FormControl,
  Grid,
  Typography,
  List,
  ListItemButton,
  ListItemIcon,
  TextField,
} from "@mui/material";
import ListItem from "@mui/material/ListItem";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageTitle from "../components/commons/pageTitle";
import { TodoListItem } from "../components/createTodoList/TodoListItem";
import { Task } from "../entities/task";
import { TodoList } from "../entities/todoList";
import BaseLayout from "../layout/BaseLayout";
const emptyTask: Task = { done: false, description: "" };
export default function CreateTodoList(props: {
  todoList?: TodoList;
  onSubmit: (data: TodoList) => void;
}) {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<Task>(emptyTask);
  const onItemChange = (index: number, value: Task) => {
    const newTasks = [...tasks];
    newTasks[index] = value;
    setTasks(newTasks);
  };
  const onItemDelete = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };
  const addTask = () => {
    if (!newTask.description) {
      return;
    }
    const newTaskState = [...tasks];
    newTaskState.push(newTask);
    setTasks(newTaskState);
    setNewTask(emptyTask);
  };
  const handleSubmit = () => {
    props.onSubmit({ title, dueDate, tasks });
    navigate("/");
  };
  return (
    <BaseLayout title="Create Todo list">
      <Grid xs={12} display="flex" justifyContent="center" padding={1}>
        <TextField
          fullWidth
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Grid>
      <Grid xs={12} display="flex" justifyContent="center" padding={1}>
        <TextField
          fullWidth
          type="date"
          placeholder="due date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
      </Grid>
      <Grid xs={12} display="flex" justifyContent="center" padding={1}>
        <Typography>Tasks</Typography>
      </Grid>
      <Grid xs={12}>
        <List>
          {tasks && tasks.length ? (
            tasks.map((x, i) => (
              <TodoListItem
                key={i}
                index={i}
                task={x}
                onChange={onItemChange}
                onDelete={onItemDelete}
              />
            ))
          ) : (
            <ListItem>No taks to show</ListItem>
          )}
        </List>
      </Grid>
      <Grid xs={12} display="flex" justifyContent="center" padding={1}>
        <TextField
          fullWidth
          placeholder="Add new Task"
          value={newTask.description}
          onChange={(e) =>
            setNewTask({ ...newTask, description: e.target.value })
          }
        />
      </Grid>
      <Grid xs={12} display="flex" justifyContent="center" padding={1}>
        <Button fullWidth variant="contained" onClick={() => addTask()}>
          add new task
        </Button>
      </Grid>

      <Grid xs={12} display="flex" justifyContent="center" padding={1}>
        <Button fullWidth variant="contained" onClick={handleSubmit}>
          Save
        </Button>
      </Grid>
    </BaseLayout>
  );
}
