import { Typography, Box, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DashboardCard from "../components/dashboard/DashboardCard";
import { TodoList } from "../entities/todoList";
import { useNavigate } from "react-router-dom";

export default function Dashboard(props: { list: TodoList[] }) {
  const navigate = useNavigate();
  const { list } = props;
  const handleFabCLick = () => {
    navigate("/create");
  };
  return (
    <>
      <Box position="relative">
        <Typography>Dashboard</Typography>
        <Box display="flex">
          {list.map((x, i) => (
            <DashboardCard key={i} todoList={x} />
          ))}
        </Box>
      </Box>
      <Fab
        color="primary"
        sx={{
          position: "absolute",
          right: 16,
          bottom: 16,
        }}
        onClick={() => handleFabCLick()}
      >
        <AddIcon />
      </Fab>
    </>
  );
}
