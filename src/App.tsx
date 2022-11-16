import { useState } from "react";
import "./App.css";
import { TodoList } from "./entities/todoList";
import MainLayout from "./layout/MainLayout";
import CreateTodoList from "./pages/CreateTodoList";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [list, setList] = useState<TodoList[]>([]);
  const addToList = (value: TodoList) => {
    setList([...list, value]);
  };
  return (
    <MainLayout>
      <Router>
        <Routes>
          <Route index element={<Dashboard list={list} />} />
          <Route
            path="/create"
            element={
              <CreateTodoList onSubmit={(item: TodoList) => addToList(item)} />
            }
          />
        </Routes>
      </Router>
    </MainLayout>
  );
}

export default App;
