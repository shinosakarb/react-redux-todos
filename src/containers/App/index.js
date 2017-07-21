import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import TodoList from '../../components/TodoList'
import * as actions from '../../actions/todos'

class App extends Component {
  componentDidMount() {
    this.props.actions.fetchTodos()
  }

  render() {
    const { todos } = this.props

    return (
      <TodoList todos={todos} />
    )
  }
}

export default connect(
  state => ({
    todos: state.todos
  }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch),
  })
)(App)
