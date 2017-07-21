import client from './client'

export const fetchTodos = () => {
  return client.get('/todos')
    .then(res => res.data)
}
