import { Typography, Box, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DashboardCard from "../components/dashboard/DashboardCard";
import { TodoList } from "../entities/todoList";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import BaseLayout from "../layout/BaseLayout";

export default function Dashboard(props: { list: TodoList[] }) {
  const navigate = useNavigate();
  const { list } = props;
  const handleFabCLick = () => {
    navigate("/create");
  };
  return (
    <BaseLayout title="Dashboard">
      <Grid container spacing={2}>
        {list.map((x, i) => (
          <Grid item key={i}>
            <DashboardCard todoList={x} />
          </Grid>
        ))}
      </Grid>
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
    </BaseLayout>
  );
}
