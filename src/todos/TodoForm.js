import { addTodo } from '../services/todoServices';
import { DebounceInput } from 'react-debounce-input';

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
        <DebounceInput
          minLength={2}
          debounceTimeout={600}
          onChange={e => setTodo(e.target.value)}
          value={todo}
        />

        {/* <input type='text' value={todo} onChange={handleChange} /> */}

        <input type='submit' value='Submit' />
      </form>
    </>
  );
};

export default TodoForm;
