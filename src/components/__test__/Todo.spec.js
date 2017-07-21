import React from 'react'
import { shallow } from 'enzyme'
import Todo from '../Todo'

describe('Todo', () => {
  const todo = {
    id: 1,
    title: 'todo1',
  }

  it("renders a `li`", () => {
    const wrapper = shallow(<Todo todo={todo} />)
    expect(wrapper.is(`li`)).toBe(true)
    expect(wrapper.find(`li`).text()).toBe('todo1')
  })
})
