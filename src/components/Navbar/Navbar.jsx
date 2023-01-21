import { useState } from "react";
import Filter from "../Filter/Filter";
import styles from "./navbar.module.css";

const Navbar = ({ todos, filterTodos,status,setStatus }) => {
  const unCompletedTodos = todos.filter((todo) => !todo.isCompleted);

  // Handlers
  const changeHandler = (e) => {
    setStatus(e.target.value);
    filterTodos(e.target.value);
  };

  // conditional rendering
  if (unCompletedTodos.length === 0)
    return <h2 style={{ marginBottom: "20px" }}>Set Your Today Todos !</h2>;

  return (
    <nav className={styles.nav}>
      <span>{unCompletedTodos.length}</span>
      <h2>Todos Uncompleted</h2>
      <Filter onChange={(e) => changeHandler(e)} status={status} />
    </nav>
  );
};

export default Navbar;
