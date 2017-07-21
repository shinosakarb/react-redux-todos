import { FETCH_TODOS_SUCCESS } from '../constants/ActionTypes'

const initialState = []

const todos = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_TODOS_SUCCESS:
      return action.todos
    default:
      return state
  }
}

export default todos
