import { Typography, Box, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DashboardCard from "../components/dashboard/DashboardCard";
import { TodoList } from "../entities/todoList";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import BaseLayout from "../layout/BaseLayout";
import DetailModal, { DetailModalData } from "../components/modal/detailModal";
import { useState } from "react";
import { ConfirmModal } from "../components/modal/ConfirmModal";

export default function Dashboard(props: {
  list: TodoList[];
  onItemChange: (value: TodoList, index?: number) => void;
  onItemDelete: (index: number) => void;
}) {
  const navigate = useNavigate();
  const { list } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [isDeleteOpen, setDeleteOpen] = useState({
    open: false,
    index: -1,
  });
  const [selected, setSelected] = useState<DetailModalData>();
  const handleCardClick = (index: number, todoList: TodoList) => {
    setSelected({ index, todoList });
    setIsOpen(true);
  };
  const handleModalClose = () => {
    setSelected(undefined);
    setIsOpen(false);
  };
  const handleFabCLick = () => {
    navigate("/create");
  };
  const handleItemChange = (value: TodoList, index?: number) => {
    if (index !== undefined) {
      setSelected({ index, todoList: value });
      props.onItemChange(value, index);
    }
    return;
  };
  return (
    <BaseLayout title="Dashboard">
      <Grid container spacing={2}>
        {list.map((x, i) => (
          <Grid item key={i}>
            <DashboardCard
              todoList={x}
              onDelete={() => setDeleteOpen({ open: true, index: i })}
              onClick={() => handleCardClick(i, x)}
            />
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
      {selected ? (
        <DetailModal
          data={selected}
          open={isOpen}
          onDelete={props.onItemDelete}
          onClose={() => handleModalClose()}
          onChange={handleItemChange}
        />
      ) : (
        <></>
      )}
      <ConfirmModal
        open={isDeleteOpen.open}
        index={isDeleteOpen.index}
        message="Do you wanna delete this?"
        onSubmit={props.onItemDelete}
        onClose={() => setDeleteOpen({ open: false, index: -1 })}
      />
    </BaseLayout>
  );
}
