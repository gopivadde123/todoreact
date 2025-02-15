import React, { useState, useEffect } from "react";
import {
  inCompleteTodo,
  completeTodo,
  deleteTodo,
  getAllTodos,
} from "../services/TodoService";
import { useNavigate } from "react-router-dom";

function ListTodoComponent() {
  //   const dummyData = [
  //     {
  //       id: 1,
  //       title: "Learn Core Java",
  //       description: "Learn Core Java with Examples",
  //       completed: false,
  //     },
  //     {
  //       id: 2,
  //       title: "Learn Core Spring",
  //       description: "Learn Core spring with Examples",
  //       completed: false,
  //     },
  //     {
  //       id: 3,
  //       title: "Learn Core spring boot",
  //       description: "Learn Core spring boot with Examples",
  //       completed: false,
  //     },
  //   ];

  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    listTodos();
  }, []);
  function listTodos() {
    getAllTodos()
      .then((response) => {
        setTodos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function addNewTodo() {
    navigate("/add-todo");
  }
  function updateTodo(id) {
    console.log(id);
    navigate(`/update-todo/${id}`);
  }
  function removeTodo(id) {
    deleteTodo(id)
      .then((response) => {
        listTodos();
      })
      .catch((error) => {
        console.error(error);
      });
  }
  function markcompleteTodo(id) {
    completeTodo(id)
      .then((response) => {
        listTodos();
      })
      .catch((error) => {
        console.error(error);
      });
  }
  function markInCompleteTodo(id) {
    inCompleteTodo(id)
      .then((response) => {
        listTodos();
      })
      .catch((error) => {
        console.error(error);
      });
  }
  return (
    <div className="container">
      <h2 className="text-center">List of Todos</h2>
      <button className="btn btn-primary mb-2" onClick={addNewTodo}>
        Add Todo
      </button>
      <div>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Todo Title</th>
              <th>Todo Description</th>
              <th>Todo Complete</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.title}</td>
                <td>{todo.description}</td>
                <td>{todo.completed ? "Yes" : "NO"}</td>
                <td>
                  <button
                    className="btn btn-info"
                    onClick={() => updateTodo(todo.id)}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => removeTodo(todo.id)}
                    style={{ marginLeft: "10px" }}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-success"
                    onClick={() => markcompleteTodo(todo.id)}
                    style={{ marginLeft: "10px" }}
                  >
                    Complete
                  </button>
                  <button
                    className="btn btn-success"
                    onClick={() => markInCompleteTodo(todo.id)}
                    style={{ marginLeft: "10px" }}
                  >
                    InComplete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListTodoComponent;
