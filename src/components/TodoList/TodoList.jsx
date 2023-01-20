import { useState } from "react";
import Todo from "../Todo/Todo";
import TodoForm from "../TodoForm/TodoForm";
import styles from "./todoList.module.css";

const TodoList = ({ todos, onComplete, onEdit, onDelete }) => {
  const [edit, setEdit] = useState({ id: null, text: "", isCompleted: false });
  // conditional rendering
  const renderTodos = () => {
    if (todos.length === 0) return <h3>Add Some Todos !</h3>;

    return (
      <section className={styles.todoList}>
        {todos.map((todo) => {
          return (
            <Todo
              key={todo.id}
              todo={todo}
              onComplete={() => onComplete(todo.id)}
              onEdit={() => setEdit(todo)}
              onDelete={() => onDelete(todo.id)}
            />
          );
        })}
      </section>
    );
  };
  // handlers
  const editTodo = (newInputValue) => {
    onEdit(edit.id, newInputValue);
    setEdit({ id: null, text: "" });
  };

  return (
    <>
      {edit.id ? <TodoForm submitTodo={editTodo} edit={edit} /> : renderTodos()}
    </>
  );
};

export default TodoList;
