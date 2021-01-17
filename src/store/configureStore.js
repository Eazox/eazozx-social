import { createStore, compose, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()
let composeEnhancers = compose

// eslint-disable-next-line no-undef
if (__DEV__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
}

const configureStore = () => {
  return createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)))
}

sagaMiddleware.run()

export default configureStore
