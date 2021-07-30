import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import todoActions from '../redux/todoActions';

const TodoList = () => {
  const db = useSelector(state => state.items);
  const dispatch = useDispatch();

  const handleClick = id => {
    dispatch(todoActions.deleteTodo(id));
  };
  return (
    <ul>
      {db.map(({ id, todo }) => (
        <li key={id}>
          <p>{todo}</p>
          <button onClick={() => handleClick(id)}>&#10006;</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
