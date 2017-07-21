import React from 'react'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import MockAdapter from 'axios-mock-adapter'
import { mount } from 'enzyme'
import App from '../App'
import TodoList from '../../components/TodoList'
import client from '../../api/client'

describe('App', () => {
  const middlewares = [thunk]
  const mockStore = configureMockStore(middlewares)
  const mock = new MockAdapter(client)
  const todos = [
    {
      id: 1,
      title: 'todo1'
    },
    {
      id: 2,
      title: 'todo2'
    }
  ]

  beforeAll(() => {
    mock.onGet('/todos').reply(200, todos)
  })

  it('renders an App container', () => {
    const store = mockStore({ todos })
    const wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    )

    expect(wrapper.find(App)).toHaveLength(1)
    expect(wrapper.find(TodoList).props()).toEqual({ todos })
  })
})
