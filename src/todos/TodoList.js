const TodoList = ({ todos, handleDelete }) => {
  return (
    <>
      <h2>Todos</h2>
      <ul>
        {todos.length > 0 ? (
          todos.map(({ _id, todo }) => (
            <li key={_id}>
              <p>{todo}</p>
              <button onClick={() => handleDelete(_id)}>&#10006;</button>
            </li>
          ))
        ) : (
          <p>Create your first todo</p>
        )}
      </ul>
    </>
  );
};

export default TodoList;
