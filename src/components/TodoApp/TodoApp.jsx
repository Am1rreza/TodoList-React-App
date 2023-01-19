import { useState } from "react";
import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../TodoList/TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  // Handlers
  const addTodoHandler = (inputValue) => {
    const newTodo = {
      id: new Date().getTime(),
      text: inputValue,
      isCompleted: false,
    };

    setTodos([...todos, newTodo]);
  };

  const completeHandler = (id) => {
    console.log(id);
  };

  const editHandler = (id) => {
    console.log(id);
  };

  return (
    <div className="container">
      <TodoForm addTodoHandler={addTodoHandler} />
      <TodoList
        todos={todos}
        onComplete={completeHandler}
        onEdit={editHandler}
      />
    </div>
  );
};

export default TodoApp;
