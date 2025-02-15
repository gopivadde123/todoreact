import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import ListTodoComponent from "./components/ListTodoComponent";
import HelloWorld from "./HelloWorld";
import TodoComponent from "./components/TodoComponent";
import RegisterComponent from "./components/RegisterComponent";
import LoginComponent from "./components/LoginComponent";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent></HeaderComponent>
        <Routes>
          {/* http://localhost:8083 */}
          <Route
            path="/"
            element={<ListTodoComponent></ListTodoComponent>}
          ></Route>
          {/* http://localhost:8083/todos */}
          <Route
            path="/todos"
            element={<ListTodoComponent></ListTodoComponent>}
          ></Route>
          {/* http://localhost:8083/add-todo */}
          <Route
            path="/add-todo"
            element={<TodoComponent></TodoComponent>}
          ></Route>
          {/* http://localhost:8083/update-todo/1 */}
          <Route
            path="/update-todo/:id"
            element={<TodoComponent></TodoComponent>}
          ></Route>
          {/* http://localhost:8083/register  */}
          <Route path="/register" element={<RegisterComponent />}></Route>
          {/* http://localhost:8083 /login*/}
          <Route
            path="/login"
            element={<LoginComponent></LoginComponent>}
          ></Route>
        </Routes>
        <FooterComponent></FooterComponent>
      </BrowserRouter>
    </>
  );
}

export default App;
