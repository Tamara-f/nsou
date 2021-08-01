import { addTodo } from '../services/todoServices';

const TodoForm = ({ todo, setTodo }) => {
  const handleSubmit = async e => {
    e.preventDefault();
    await addTodo(todo);
    setTodo('');
  };

  return (
    <>
      <h2>Add new todo</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={todo}
          onChange={e => setTodo(e.target.value)}
        />
        <input type='submit' value='Submit' />
      </form>
    </>
  );
};

export default TodoForm;
