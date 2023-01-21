import Filter from "../Filter/Filter";
import styles from "./navbar.module.css";

const Navbar = ({ todos, filterTodos, selectedOption, setSelectedOption }) => {
  const unCompletedTodos = todos.filter((todo) => !todo.isCompleted);

  // Handlers
  const changeHandler = (e) => {
    setSelectedOption(e);
    filterTodos(e.value);
  };

  // conditional rendering
  if (unCompletedTodos.length === 0)
    return <h2 style={{ marginBottom: "20px" }}>Set Your Today Todos !</h2>;

  return (
    <div className={styles.navContainer}>
    <nav className={styles.nav}>
      <span>{unCompletedTodos.length}</span>
      <h2>Todos Uncompleted</h2>
    </nav>
      <Filter onChange={(e) => changeHandler(e)} selectedOption={selectedOption} />
    </div>
  );
};

export default Navbar;
