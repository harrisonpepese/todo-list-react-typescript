import { Button, Grid, Typography, TextField, Box } from "@mui/material";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TaskList from "../components/createTodoList/TaskList";
import { Task } from "../entities/task";
import { TodoList } from "../entities/todoList";
import BaseLayout from "../layout/BaseLayout";
const emptyTask: Task = { done: false, description: "" };
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
  const [title, setTitle] = useState(list?.title || "");
  const [dueDate, setDueDate] = useState(list?.dueDate || "");
  const [tasks, setTasks] = useState<Task[]>(list?.tasks || []);
  const [newTask, setNewTask] = useState<Task>(emptyTask);

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
  const handleSubmit = () => {
    props.onSubmit({ title, dueDate, tasks }, index);
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
              value={title}
              onChange={(e) => setTitle(e.target.value)}
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
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
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
