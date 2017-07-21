import React from 'react'

const Todo = ({ todo }) => <li key={todo.id}>{todo.title}</li>

export default Todo
