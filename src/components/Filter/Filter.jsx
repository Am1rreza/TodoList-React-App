const Filter = ({ onChange, status }) => {
  return (
    <select value={status} onChange={onChange}>
      <option value="All">All</option>
      <option value="Completed">Completed</option>
      <option value="Uncompleted">Uncopmleted</option>
    </select>
  );
};

export default Filter;
