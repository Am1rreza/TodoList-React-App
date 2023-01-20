import { useState } from "react";
import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../TodoList/TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  // Handlers
  const addTodo = (inputValue) => {
    const newTodo = {
      id: new Date().getTime(),
      text: inputValue,
      isCompleted: false,
    };

    setTodos([...todos, newTodo]);
  };

  const completeTodo = (id) => {
    const allTodos = [...todos];

    const index = todos.findIndex((todo) => todo.id === id);
    const selectedTodo = { ...todos[index] };

    selectedTodo.isCompleted = !selectedTodo.isCompleted;
    allTodos[index] = selectedTodo;

    setTodos(allTodos);
  };

  const editTodo = (id, newInputValue) => {
    const allTodos = [...todos];

    const index = todos.findIndex((todo) => todo.id === id);
    const selectedTodo = { ...todos[index] };

    selectedTodo.text = newInputValue;
    allTodos[index] = selectedTodo;

    setTodos(allTodos);
  };

  const deleteTodo = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  return (
    <div className="container">
      <TodoForm submitTodo={addTodo} />
      <TodoList
        todos={todos}
        onComplete={completeTodo}
        onEdit={editTodo}
        onDelete={deleteTodo}
      />
    </div>
  );
};

export default TodoApp;
