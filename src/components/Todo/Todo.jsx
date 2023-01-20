import styles from "./todo.module.css";

const Todo = ({ todo, onEdit, onComplete, onDelete }) => {
  return (
    <div className={styles.todo}>
      <div
        onClick={onComplete}
        className={`${todo.isCompleted ? styles.completed : undefined} ${
          styles.todoText
        }`}
      >
        {todo.text}
      </div>
      <div>
        <button className={styles.edit} onClick={onEdit}>
          Edit
        </button>
        <button className={styles.remove} onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
