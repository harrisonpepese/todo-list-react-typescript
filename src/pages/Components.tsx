import { TodoList } from "../entities/todoList";
import { useNavigate } from "react-router-dom";
import { DetailModalData } from "../components/modal/detailModal";
import { useState } from "react";
import { BaseButton } from "../components/buttons/BaseButton";
import { OutlinedButton } from "../components/buttons/OutLinedButton";
import { ContainedButton } from "../components/buttons/ContainedButton";
import InputField from "../components/inputField/InputField";

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
    <>
      <div>
        <h4>buttons</h4>
        <BaseButton>Base Button</BaseButton>
        <OutlinedButton>Outlined Button</OutlinedButton>
        <ContainedButton>Contained Button</ContainedButton>
      </div>
      <div>
        <h4>Input Field</h4>
        <InputField placeholder="Input basic" />
        <InputField value={"Input value"} />
        <InputField hint={"this is a hint"} />
        <InputField
          placeholder="Input Error"
          error={true}
          hint={"this is a hint"}
        />
      </div>
    </>
  );
}
