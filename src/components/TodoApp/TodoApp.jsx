import { useState } from "react";
import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../TodoList/TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  return (
    <div className="container">
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default TodoApp;
