import styles from "./navbar.module.css";

const Navbar = ({ todos }) => {
  const unCompletedTodos = todos.filter((todo) => !todo.isCompleted);

  // conditional rendering
  if (unCompletedTodos.length === 0)
    return <h2 style={{ marginBottom: "20px" }}>Set Your Today Todos !</h2>;

  return (
    <nav className={styles.nav}>
      <span>{unCompletedTodos.length}</span>
      <h2>Todos Uncompleted</h2>
    </nav>
  );
};

export default Navbar;
