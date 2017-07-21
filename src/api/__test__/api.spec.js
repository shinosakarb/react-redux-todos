import MockAdapter from 'axios-mock-adapter'
import client from '../client'
import * as api from '../'

describe('api', () => {
  const mock = new MockAdapter(client)
  const todos = [
    {
      id: 1,
      title: 'todo1',
    },
    {
      id: 2,
      title: 'todo2',
    }
  ]

  describe('fetchTodos', () => {
    it('returns todos', () => {
      mock.onGet('/todos').reply(200, todos)
      return api.fetchTodos().then(json => {
        expect(json).toEqual(todos)
      })
    })
  })

  describe('addTodo', () => {
    it('returns new todo', () => {
      const todo = { title: 'todo1' }
      const newTodo = { ...todo, id: 1 }
      mock.onPost('/todos').reply(201, newTodo)
      return api.addTodo('todo1').then(json => {
        expect(json).toEqual(newTodo)
      })
    })
  })
})
