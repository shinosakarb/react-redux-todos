import React from 'react'
import { shallow } from 'enzyme'
import TodoList from '../TodoList'
import Todo from '../Todo'

describe('TodoList', () => {
  const todos = [{
    id: 1,
    title: 'todo1',
  },{
    id: 2,
    title: 'todo2',
  }]

  it('renders an `ul.todo-list`', () => {
    const wrapper = shallow(<TodoList todos={todos} />)
    expect(wrapper.find('ul.todo-list')).toHaveLength(1)
  })

  it("returns two todos", () => {
    const wrapper = shallow(<TodoList todos={todos} />)
    expect(wrapper.find(Todo)).toHaveLength(2)

    wrapper.find(Todo).forEach((node, index) => {
      expect(node.props()).toEqual({ todo: todos[index] })
    })
  })
})

