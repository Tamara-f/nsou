import React from 'react';
import TodoForm from './todos/TodoForm';
import TodoList from './todos/TodoList';

const App = () => {
  return (
    <div>
      <h1>Todos</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default App;
