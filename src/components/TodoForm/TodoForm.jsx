import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

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
    <form onSubmit={submitHandler}>
      <input
        type="text"
        value={inputValue}
        onChange={changeHandler}
        placeholder={props.edit ? "Update Todo" : "Add Todo"}
        ref={inputRef}
      />
      <button type="submit">{props.edit ? "Update" : "Add"}</button>
    </form>
  );
};

export default TodoForm;
