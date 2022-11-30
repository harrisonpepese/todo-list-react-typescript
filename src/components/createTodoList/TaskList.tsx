import { List, ListItem } from "../list/List";
import { Task } from "../../entities/task";
import { TaskListItem } from "./TaskListItem";

export default function TaskList(props: {
  tasks: Task[];
  onChange: (tasks: Task[]) => void;
}) {
  const { tasks, onChange } = props;
  const onItemChange = (index: number, value: Task) => {
    const newTasks = [...tasks];
    newTasks[index] = value;
    onChange(newTasks);
  };
  const onItemDelete = (index: number) => {
    onChange(tasks.filter((_, i) => i !== index));
  };
  return (
    <List>
      {tasks && tasks.length ? (
        tasks.map((x, i) => (
          <TaskListItem
            key={i}
            index={i}
            task={x}
            onChange={onItemChange}
            onDelete={onItemDelete}
          />
        ))
      ) : (
        <ListItem data-testid="tasklist-emptyitem">No tasks to show</ListItem>
      )}
    </List>
  );
}
