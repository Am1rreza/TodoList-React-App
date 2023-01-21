import Select from "react-select";

const options = [
  { value: "All", label: "All" },
  { value: "Completed", label: "Completed" },
  { value: "Uncompleted", label: "Uncompleted" },
];

const Filter = ({ onChange, selectedOption }) => {
  return (
    // <select value={status} onChange={onChange}>
    //   <option value="All">All</option>
    //   <option value="Completed">Completed</option>
    //   <option value="Uncompleted">Uncopmleted</option>
    // </select>
    <Select onChange={onChange} options={options} value={selectedOption} className="select" />
  );
};

export default Filter;
