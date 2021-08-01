import React from 'react';
import db from '../InitialData.json';

const TodoList = () => {
  const items = db.map(({ id, todo }) => <li key={id}>{todo}</li>);

  return <ul>{items}</ul>;
};

export default TodoList;
