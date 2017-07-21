import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import TodoList from '../../components/TodoList'
import TodoInputText from '../../components/TodoInputText'
import * as actions from '../../actions/todos'

class App extends Component {
  componentDidMount() {
    this.props.actions.fetchTodos()
  }

  render() {
    const { todos, actions } = this.props

    return (
      <div>
        <TodoInputText onSave={actions.addTodo} />
        <TodoList todos={todos} />
      </div>
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
