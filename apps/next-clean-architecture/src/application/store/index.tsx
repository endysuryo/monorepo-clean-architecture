import { createWrapper } from 'next-redux-wrapper'
import { applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import services from '../../infrastructure/services'
import middleware from './middleware'
import reducers from './reducers'

const bindMiddleware = (thunk: any) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...thunk))
  }
  return applyMiddleware(...thunk)
}
const initStore = () => {
  return createStore(
    reducers,
    bindMiddleware([
      thunkMiddleware,
      ...middleware.map((f: any) => f(services)),
    ])
  )
}

export const wrapper = createWrapper(initStore)
