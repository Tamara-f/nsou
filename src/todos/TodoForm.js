import React, { useState } from 'react';

const TodoForm = () => {
  const [todo, setTodo] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    setTodo('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Create todo:
          <input
            type='text'
            value={todo}
            onChange={e => setTodo(e.target.value)}
          />
        </label>
        <input type='submit' value='Submit' />
      </form>
    </>
  );
};

export default TodoForm;
