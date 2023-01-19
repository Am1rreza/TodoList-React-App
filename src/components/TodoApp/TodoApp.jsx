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
    const allTodos = [...todos];

    const index = todos.findIndex((todo) => todo.id === id);
    const selectedTodo = { ...todos[index] };

    selectedTodo.isCompleted = !selectedTodo.isCompleted;
    allTodos[index] = selectedTodo;

    setTodos(allTodos);
  };

  const editHandler = (id) => {
    console.log(id);
  };

  const deleteHandler = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  return (
    <div className="container">
      <TodoForm addTodoHandler={addTodoHandler} />
      <TodoList
        todos={todos}
        onComplete={completeHandler}
        onEdit={editHandler}
        onDelete={deleteHandler}
      />
    </div>
  );
};

export default TodoApp;
