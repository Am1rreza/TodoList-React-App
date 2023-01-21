import { useEffect } from "react";
import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../TodoList/TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [selectedOption, setSelectedOption] = useState("All");

  useEffect(() => {
    filterTodos(selectedOption.value);
  }, [todos]);

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

  const filterTodos = (status) => {
    switch (status) {
      case "Completed":
        setFilteredTodos(todos.filter((todo) => todo.isCompleted));
        break;

      case "Uncompleted":
        setFilteredTodos(todos.filter((todo) => !todo.isCompleted));
        break;

      default:
        setFilteredTodos(todos);
        break;
    }
  };

  return (
    <>
      <div className="container">
        <Navbar
          todos={todos}
          filterTodos={filterTodos}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
        <TodoForm submitTodo={addTodo} todos={todos} />
        <TodoList
          todos={filteredTodos}
          onComplete={completeTodo}
          onEdit={editTodo}
          onDelete={deleteTodo}
        />
      </div>
    </>
  );
};

export default TodoApp;
