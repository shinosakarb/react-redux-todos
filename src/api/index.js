import client from './client'

export const fetchTodos = () => {
  return client.get('/todos')
    .then(res => res.data)
}

export const addTodo = (todo) => {
  return client.post('/todos', { todo: { title: todo } })
    .then(res => res.data)
}
