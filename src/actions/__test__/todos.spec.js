import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import MockAdapter from 'axios-mock-adapter'
import client from '../../api/client'
import * as actions from '../todos'
import * as types from '../../constants/ActionTypes'

describe('todos actions', () => {
  const middlewares = [thunk]
  const mockStore = configureMockStore(middlewares)
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

  describe('action creators', () => {
    it('created FETCH_TODOS_SUCCESS', () => {
      expect(actions.fetchTodosSuccess(todos)).toEqual({
        type: types.FETCH_TODOS_SUCCESS,
        todos
      })
    })

    it('created ADD_TODO_SUCCESS', () => {
      const todo = {
        id: 1,
        title: 'todo1'
      }

      expect(actions.addTodoSuccess(todo)).toEqual({
        type: types.ADD_TODO_SUCCESS,
        todo
      })
    })
  })

  describe('fetchTodo', () => {
    beforeAll(() => {
      mock.onGet('/todos').reply(200, todos)
    })

    it('is calling action creators', () => {
      const store = mockStore([])

      const expectedActions = [
        { type: types.FETCH_TODOS_SUCCESS, todos }
      ]

      return store.dispatch(actions.fetchTodos()).then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
    })
  })

  describe('addTodo', () => {
    const todo = {
      id: 1,
      title: 'todo1'
    }

    beforeAll(() => {
      mock.onPost('/todos').reply(201, todo)
    })

    it('is calling action creators', () => {
      const store = mockStore([])

      const expectedActions = [
        { type: types.ADD_TODO_SUCCESS, todo }
      ]

      return store.dispatch(actions.addTodo()).then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
    })
  })
})
