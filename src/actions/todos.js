import * as types from '../constants/ActionTypes'
import * as api from '../api'

export const fetchTodosSuccess = (todos) => {
  return {
    type: types.FETCH_TODOS_SUCCESS,
    todos
  }
}

export const fetchTodos = () => (dispatch, getState) => {
  return api.fetchTodos()
    .then(json => dispatch(fetchTodosSuccess(json)))
}
