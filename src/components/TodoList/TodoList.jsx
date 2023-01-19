import Todo from "../Todo/Todo";
import styles from "./todoList.module.css";

const TodoList = ({ todos, onComplete, onEdit }) => {
  if (todos.length === 0) return <h3>Add Some Todos</h3>;

  return (
    <section className={styles.todoList}>
      {todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            todo={todo}
            onComplete={() => onComplete(todo.id)}
            onEdit={() => onEdit(todo.id)}
          />
        );
      })}
    </section>
  );
};

export default TodoList;
