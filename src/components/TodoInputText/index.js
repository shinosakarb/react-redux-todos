import React, { Component } from 'react'

class TodoInputText extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  handleSubmit = e => {
    const text = e.target.value.trim()
    if (e.which === 13) {
      this.props.onSave(text)
      this.setState({ text: '' })
    }
  }

  handleChange = e => {
    this.setState({ text: e.target.value })
  }

  render() {
    return (
      <input
        type="text"
        value={this.state.text}
        onChange={this.handleChange}
        onKeyDown={this.handleSubmit}
      />
    )
  }
}

export default TodoInputText
