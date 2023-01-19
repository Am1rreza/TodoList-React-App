import styles from "./todo.module.css";

const Todo = ({ todo }) => {
  return (
    <div className={styles.todo}>
      <div>{todo.text}</div>
      <div>
        <button>Edit</button>
        <button>Complete</button>
      </div>
    </div>
  );
};

export default Todo;
