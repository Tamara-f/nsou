import React, { useState } from 'react';
import todoActions from '../redux/todoActions';
import { useDispatch } from 'react-redux';

const TodoForm = () => {
  const [todo, setTodo] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    if (todo) {
      dispatch(todoActions.addTodo(todo));
    }

    setTodo('');
  };

  return (
    <>
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
