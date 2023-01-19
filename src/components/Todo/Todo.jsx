import styles from "./todo.module.css";

const Todo = ({ todo, onEdit, onComplete }) => {
  return (
    <div className={styles.todo}>
      <div>{todo.text}</div>
      <div>
        <button onClick={onEdit}>Edit</button>
        <button onClick={onComplete}>Complete</button>
      </div>
    </div>
  );
};

export default Todo;
