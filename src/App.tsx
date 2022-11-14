import "./App.css";
import MainLayout from "./layout/MainLayout";
import CreateTodoList from "./pages/CreateTodoList";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <MainLayout>
      <CreateTodoList />
    </MainLayout>
  );
}

export default App;
