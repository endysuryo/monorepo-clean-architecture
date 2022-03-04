import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import middleware from './middleware'
import reducers from './reducers'

// dev tool
export const composeEnhancers =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

export const configureStore = (services: any) =>
  createStore(
    reducers,
    composeEnhancers(
      applyMiddleware(thunk, ...middleware.map((f) => f(services)))
    )
  )
