import { render, screen } from '@testing-library/react'
import React from 'react'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import App from '../src/App'

describe('App Component', () => {
  const initialState = {}
  const mockStore = configureStore()
  let store

  // snapshot
  it('renders correctly', () => {
    store = mockStore(initialState)
    const tree = renderer
      .create(
        <Provider store={store}>
          <App />
        </Provider>,
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  // check element
  it('renders learn react link', () => {
    render(<App />)
    const linkElement = screen.getByText(/learn react/i)
    expect(linkElement).toBeInTheDocument()
  })
})
