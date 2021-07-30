import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './todoActions';
import initialState from './initialState.json';

const items = createReducer(initialState, {
  [actions.addTodo]: (state, { payload }) => [...state, payload],
  [actions.editTodo]: (state, { payload }) =>
    state.map(todo => (todo.id === payload.id ? payload : todo)),
  [actions.deleteTodo]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
  [actions.toggleArchived]: (state, { payload }) =>
    state.map(todo =>
      todo.id === payload ? { ...todo, archived: !todo.archived } : todo
    )
});

export default combineReducers({
  items
});
