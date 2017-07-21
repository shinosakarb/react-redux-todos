import { FETCH_TODOS_SUCCESS, ADD_TODO_SUCCESS } from '../constants/ActionTypes'

const initialState = []

const todos = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_TODOS_SUCCESS:
      return action.todos
    case ADD_TODO_SUCCESS:
      const todo = action.todo
      return [...state, {...todo}]
    default:
      return state
  }
}

export default todos
