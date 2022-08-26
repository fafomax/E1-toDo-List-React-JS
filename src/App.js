import "./App.css";
import toDoListLogo from "./img/toDoListLogo.png";
import ListaDeTareas from "./components/ListaDeTareas";
import BorrarTodo from "./components/BorrarTodo";

function App() {
  return (
    <div className="toDoList">
      <div className="logo-container-toDoList">
        <img src={toDoListLogo} className="logo-toDoList" alt="Logo To Do" />
      </div>

      <div className="tareas-lista-principal">
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
        <BorrarTodo />
      </div>
    </div>
  );
}

export default App;
