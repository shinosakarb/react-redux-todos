import reducer from '../todos'
import * as types from '../../constants/ActionTypes'

describe('todos reducer', () => {
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

  it('returns initial state', () => {
    expect(reducer(undefined, {})).toEqual([])
  })

  it('returns todos', () => {
    expect(reducer([], { type: types.FETCH_TODOS_SUCCESS, todos })).toEqual(todos)
  })

  it('returns including new todo', () => {
    const todo = {
      id: 3,
      title: 'todo3'
    }
    const newTodos = [ ...todos, {...todo} ]

    expect(reducer(todos, { type: types.ADD_TODO_SUCCESS, todo })).toEqual(newTodos)
  })
})
