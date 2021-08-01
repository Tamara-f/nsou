import axios from 'axios';

const apiUrl = 'https://whispering-sea-47905.herokuapp.com/api/todos';

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
