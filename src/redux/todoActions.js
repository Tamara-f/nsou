import { createAction } from '@reduxjs/toolkit';

const addTodo = createAction('todos/add', todo => ({
  payload: {
    id: Date.now(),
    todo: todo
  }
}));

const deleteTodo = createAction('todos/delete');

const editTodo = createAction('todos/edit', ({ id, todo }) => ({
  payload: {
    id,
    todo
  }
}));

const todosActions = { addTodo, deleteTodo, editTodo };
export default todosActions;
