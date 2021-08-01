import { useState, useEffect } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import { getTodos, deleteTodo } from './services/todoServices';

const App = () => {
  const [todos, setTodos] = useState('');
  const [todo, setTodo] = useState('');

  useEffect(() => {
    try {
      getTodos().then(todos => {
        setTodos(todos);
      });
    } catch (error) {
      console.log(error);
    }
  }, [todo]);

  const handleDelete = async id => {
    try {
      const newTodos = await todos.filter(todo => todo._id !== id);
      setTodos(newTodos);
      await deleteTodo(id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <TodoForm setTodo={setTodo} todo={todo} />
      <TodoList todos={todos} handleDelete={handleDelete} />
    </>
  );
};

export default App;
