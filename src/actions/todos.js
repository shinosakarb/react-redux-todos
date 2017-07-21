import { FETCH_TODOS_SUCCESS, ADD_TODO_SUCCESS } from '../constants/ActionTypes'
import * as api from '../api'

export const fetchTodosSuccess = (todos) => {
  return {
    type: FETCH_TODOS_SUCCESS,
    todos
  }
}

export const addTodoSuccess = (todo) => {
  return {
    type: ADD_TODO_SUCCESS,
    todo
  }
}

export const fetchTodos = () => (dispatch, getState) => {
  return api.fetchTodos()
    .then(json => dispatch(fetchTodosSuccess(json)))
}

export const addTodo = (todo) => (dispatch, getState) => {
  return api.addTodo(todo)
    .then(json => dispatch(addTodoSuccess(json)))
}
