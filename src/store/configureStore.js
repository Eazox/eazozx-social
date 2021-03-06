import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import rootSaga from './sagas'
import AsyncStorage from '@react-native-community/async-storage'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistReducer, persistStore } from 'redux-persist'

const persistConfig = {
  key: 'root4',
  storage: AsyncStorage,
  blacklist: ['stackReducer', 'setPageReducer']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
)

export const persistor = persistStore(store)
sagaMiddleware.run(rootSaga)
