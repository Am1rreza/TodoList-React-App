import Todo from "../Todo/Todo";

const TodoList = ({ todos }) => {
  if (todos.length === 0) return <h3>Add Some Todos</h3>;

  return (
    <section>
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} />;
      })}
    </section>
  );
};

export default TodoList;
