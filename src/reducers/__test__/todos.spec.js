import reducer from '../todos'
import * as types from '../../constants/ActionTypes'

describe('todos reducer', () => {
  it('returns initial state', () => {
    expect(reducer(undefined, {})).toEqual([])
  })

  it('returns todos', () => {
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

    expect(reducer([], { type: types.FETCH_TODOS_SUCCESS, todos })).toEqual(todos)
  })
})
