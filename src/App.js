import React from 'react';
import TodoForm from './todos/TodoForm';
import TodoList from './todos/TodoList';

const App = () => {
  return (
    <div>
      <h2>Add new todo:</h2>
      <TodoForm />
      <h1>Todos:</h1>
      <TodoList />
    </div>
  );
};

export default App;
