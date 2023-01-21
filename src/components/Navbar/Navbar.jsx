import styles from "./navbar.module.css";

const Navbar = ({ todos }) => {
  const unCompletedTodos = todos.filter((todo) => !todo.isCompleted);

  return (
    <nav className={styles.nav}>
      {unCompletedTodos.length === 0 ? (
        <>
          <h2>Set Your Today Todos</h2>
        </>
      ) : (
        <>
          <span>{unCompletedTodos.length}</span>
          <h2>Todos Uncompleted</h2>
        </>
      )}
    </nav>
  );
};

export default Navbar;
