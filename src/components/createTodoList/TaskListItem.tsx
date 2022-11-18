import {
  Button,
  Checkbox,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Task } from "../../entities/task";
import InputHelper from "../../utils/inputHelper";
import DeleteIcon from "@mui/icons-material/Delete";

export function TaskListItem(props: {
  index: number;
  task: Task;
  onChange: (index: number, value: Task) => void;
  onDelete: (index: number) => void;
}) {
  const { index, task, onChange, onDelete } = props;
  const [editing, setEditing] = useState(false);

  return (
    <ListItem>
      <ListItemIcon>
        <Checkbox
          checked={task.done}
          onChange={(e) => onChange(index, { ...task, done: e.target.checked })}
        />
      </ListItemIcon>
      {editing ? (
        <TextField
          autoFocus
          onBlur={() => setEditing(false)}
          onKeyDown={(key) =>
            InputHelper.submitOnEnter(key, () => {
              setEditing(false);
            })
          }
          onChange={(e) =>
            onChange(index, { ...task, description: e.target.value })
          }
          variant="standard"
          value={task.description}
        />
      ) : (
        <Typography component="p" onClick={() => setEditing(true)}>
          {task.description}
        </Typography>
      )}

      <ListItemSecondaryAction>
        <IconButton onClick={() => onDelete(index)}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}
