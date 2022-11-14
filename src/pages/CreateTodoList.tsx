import {
  Box,
  Button,
  Checkbox,
  FormControl,
  List,
  ListItemButton,
  ListItemIcon,
  TextField,
} from "@mui/material";
import { spacing } from "@mui/system";
import { useState } from "react";
import { TodoListItem } from "../components/createTodoList/TodoListItem";
import { Task } from "../entities/task";
import { TodoList } from "../entities/todoList";
const emptyTask: Task = { done: false, description: "" };
export default function CreateTodoList(props: { todoList?: TodoList }) {
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
  return (
    <form onSubmit={() => console.log("submit")}>
      <Box p={2}>
        <TextField
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
      </Box>
      <Box p={2}>
        <TextField
          placeholder="Add new Task"
          value={newTask.description}
          onChange={(e) =>
            setNewTask({ ...newTask, description: e.target.value })
          }
        />
        <Button onClick={() => addTask()}>add</Button>
      </Box>
      <List>
        {tasks.map((x, i) => (
          <TodoListItem
            key={i}
            index={i}
            task={x}
            onChange={onItemChange}
            onDelete={onItemDelete}
          />
        ))}
      </List>
    </form>
  );
}
