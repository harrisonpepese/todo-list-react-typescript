import { Typography, Box } from "@mui/material";
import { useState } from "react";
import DashboardCard from "../components/dashboard/DashboardCard";

export default function Dashboard(props: any) {
  const [list, setList] = useState([
    {
      title: "Complete list",
      dueDate: new Date("2022-11-20"),
      tasks: [
        {
          description: "do it",
          done: true,
        },
        {
          description: "do that",
          done: true,
        },
      ],
    },
    {
      title: "In progress list",
      dueDate: new Date("2022-11-20"),
      tasks: [
        {
          description: "do it",
          done: false,
        },
        {
          description: "do that",
          done: true,
        },
      ],
    },
    {
      title: "expired",
      dueDate: new Date("2022-11-10"),
      tasks: [
        {
          description: "do it",
          done: false,
        },
        {
          description: "do that",
          done: true,
        },
      ],
    },
  ]);
  return (
    <>
      <Typography>Dashboard</Typography>
      <Box display="flex">
        {list.map((x, i) => (
          <DashboardCard key={i} todoList={x} />
        ))}
      </Box>
    </>
  );
}
