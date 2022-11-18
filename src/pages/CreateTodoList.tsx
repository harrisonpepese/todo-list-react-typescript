import { Button, Grid, Typography, TextField, Box } from "@mui/material";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TaskList from "../components/createTodoList/TaskList";
import { Task } from "../entities/task";
import { TodoList } from "../entities/todoList";
import BaseLayout from "../layout/BaseLayout";
import {
  InputHandler,
  InputState,
  minLength,
  required,
} from "../utils/inputValidation";
const emptyTask: Task = { done: false, description: "" };

type CreateTodoInput = {
  title: InputState;
  dueDate: InputState;
};
type StateType = keyof CreateTodoInput;
export default function CreateTodoList(props: {
  todoList?: TodoList[];
  onSubmit: (data: TodoList, index?: number) => void;
}) {
  const { id } = useParams();
  const index = id ? Number.parseInt(id) : undefined;
  const list =
    props.todoList && index !== undefined ? props.todoList[index] : undefined;
  console.log(props.todoList && index);
  const navigate = useNavigate();
  const [state, setState] = useState<CreateTodoInput>({
    title: {
      value: list?.title || "",
      hint: "",
      rules: [minLength, required],
      error: false,
      minLenght: 3,
    },
    dueDate: {
      value: list?.title || "",
      hint: "",
      rules: [required],
      error: false,
      minLenght: 3,
    },
  });
  const [tasks, setTasks] = useState<Task[]>(list?.tasks || []);
  const [newTask, setNewTask] = useState<Task>(emptyTask);

  const handleInputChange = (field: StateType, targetValue: string) => {
    const res = InputHandler(state[field], targetValue);
    setState({ ...state, [field]: res });
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
  const back = () => {
    navigate("/");
  };

  const validate = () => {
    const newState = { ...state };
    let error = false;
    const keys = Object.keys(state) as StateType[];
    for (const key of keys) {
      const res = InputHandler(state[key], state[key].value);
      newState[key] = res;
      if (res.error) {
        error = true;
      }
    }
    setState(newState);
    return !error;
  };

  const handleSubmit = () => {
    if (!validate()) {
      return;
    }
    props.onSubmit(
      { title: state.title.value, dueDate: state.dueDate.value, tasks },
      index
    );
    navigate("/");
  };
  return (
    <BaseLayout title="Create Todo list">
      <Box>
        <Grid container justifyContent="center">
          <Grid
            item
            xs={12}
            lg={6}
            display="flex"
            justifyContent="center"
            padding={1}
          >
            <TextField
              fullWidth
              type="text"
              placeholder="Title"
              helperText={state.title.hint}
              error={state.title.error}
              value={state.title.value}
              onChange={(e) => handleInputChange("title", e.target.value)}
            />
          </Grid>
          <Grid
            item
            xs={12}
            lg={6}
            display="flex"
            justifyContent="center"
            padding={1}
          >
            <TextField
              fullWidth
              type="date"
              placeholder="due date"
              helperText={state.dueDate.hint}
              error={state.dueDate.error}
              value={state.dueDate.value}
              onChange={(e) => handleInputChange("dueDate", e.target.value)}
            />
          </Grid>
          <Grid item xs={12} display="flex" justifyContent="center" padding={1}>
            <Typography>Tasks</Typography>
          </Grid>
          <Grid item xs={12}>
            <TaskList tasks={tasks} onChange={(t) => setTasks(t)} />
          </Grid>
          <Grid
            xs={12}
            lg={10}
            item
            display="flex"
            justifyContent="center"
            padding={1}
          >
            <TextField
              fullWidth
              placeholder="Add new Task"
              value={newTask.description}
              onChange={(e) =>
                setNewTask({ ...newTask, description: e.target.value })
              }
            />
          </Grid>
          <Grid
            xs={12}
            lg={2}
            item
            display="flex"
            justifyContent="center"
            padding={1}
          >
            <Button fullWidth variant="contained" onClick={() => addTask()}>
              add new task
            </Button>
          </Grid>
          <Grid xs={3} item display="flex" justifyContent="center" padding={1}>
            <Button fullWidth variant="contained" onClick={back}>
              back
            </Button>
          </Grid>
          <Grid xs={3} item display="flex" justifyContent="center" padding={1}>
            <Button fullWidth variant="contained" onClick={handleSubmit}>
              Save
            </Button>
          </Grid>
        </Grid>
      </Box>
    </BaseLayout>
  );
}
