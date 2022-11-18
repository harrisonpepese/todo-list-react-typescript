import { useState } from "react";
import "./App.css";
import { TodoList } from "./entities/todoList";
import MainLayout from "./layout/MainLayout";
import CreateTodoList from "./pages/CreateTodoList";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [list, setList] = useState<TodoList[]>([
    {
      title: "Mock todo list",
      dueDate: "2022-11-17",
      tasks: [
        { done: true, description: "Mock description 1" },
        { done: false, description: "Mock description 2" },
        { done: false, description: "Mock description 3" },
        { done: false, description: "Mock description 4" },
      ],
    },
  ]);
  const handleDelete = (index: number) => {
    setList(list.filter((_, i) => i !== index));
  };
  const updateList = (value: TodoList, index?: number) => {
    if (index !== undefined) {
      const newList = [...list];
      newList[index] = value;
      return setList(newList);
    }
    return setList([...list, value]);
  };
  return (
    <MainLayout>
      <Router>
        <Routes>
          <Route
            index
            element={
              <Dashboard
                list={list}
                onItemChange={updateList}
                onItemDelete={handleDelete}
              />
            }
          />
          <Route
            path="/create"
            element={<CreateTodoList onSubmit={updateList} />}
          />
          <Route
            path="/update/:id"
            element={<CreateTodoList todoList={list} onSubmit={updateList} />}
          />
        </Routes>
      </Router>
    </MainLayout>
  );
}

export default App;
