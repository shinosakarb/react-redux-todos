import React from 'react'
import { shallow, mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import TodoInputText from '../TodoInputText'

describe('TodoInputText', () => {
  it('handleChange', () => {
    const onSave = jest.fn()
    const wrapper = mount(<TodoInputText onSave={onSave} />)

    const inputText = wrapper.find('input')

    // change input text
    inputText.simulate('change', { target: { value: 'todo1' } })
    inputText.simulate('keyDown', { which: 13 })

    expect(toJson(wrapper)).toMatchSnapshot()
    expect(onSave.mock.calls).toHaveLength(1)
  })
})
