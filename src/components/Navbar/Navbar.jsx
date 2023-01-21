import styles from "./navbar.module.css";

const Navbar = ({ todos }) => {
  return (
    <nav className={styles.nav}>
      <span>{todos.filter((todo) => !todo.isCompleted).length}</span>
      <h2>Todos Uncompleted</h2>
    </nav>
  );
};

export default Navbar;
