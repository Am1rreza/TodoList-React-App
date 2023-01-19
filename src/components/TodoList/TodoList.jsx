const TodoList = ({ todos }) => {
  if (todos.length === 0) return <h3>Add Some Todos</h3>;

  return (
    <section>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <div>{todo.text}</div>
            <div>
              <button>Edit</button>
              <button>Complete</button>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default TodoList;
