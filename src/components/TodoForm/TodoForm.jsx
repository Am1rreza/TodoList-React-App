import { useEffect, useRef, useState } from "react";
import styles from "./todoForm.module.css";

const TodoForm = (props) => {
  const [inputValue, setInputValue] = useState(
    props.edit ? props.edit.text : ""
  );
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // Handlers
  const changeHandler = (e) => {
    setInputValue(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!inputValue) {
      alert("Please enter a todo !");
      return;
    }

    props.submitTodo(inputValue);
    // clear the input
    setInputValue("");
  };

  return (
    <form style={{ width: "50%" }} onSubmit={submitHandler}>
      <div className={styles.formControl}>
        <input
          type="text"
          value={inputValue}
          onChange={changeHandler}
          placeholder={props.edit ? "Update Todo" : "Add Todo"}
          ref={inputRef}
        />
        <button
          className={`${props.edit ? styles.update : styles.add}`}
          type="submit"
        >
          {props.edit ? "Update" : "Add"}
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
