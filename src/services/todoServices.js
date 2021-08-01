import axios from 'axios';

const apiUrl =
  'http://localhost:4000/api/todos' || 'http://localhost:8080/api/todos';

export async function getTodos() {
  const { data } = await axios.get(apiUrl);
  return data;
}

export function addTodo(todo) {
  return axios.post(apiUrl, { todo: todo });
}

export function deleteTodo(id) {
  return axios.delete(apiUrl + '/' + id);
}
