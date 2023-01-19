import { useState } from "react";

const TodoForm = () => {
  const [inputValue, setInputValue] = useState("");

  // Handlers
  const changeHandler = (e) => {
    setInputValue(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form>
      <input type="text" value={inputValue} onChange={changeHandler} />
      <button type="submit" onSubmit={submitHandler}>
        Add
      </button>
    </form>
  );
};

export default TodoForm;
