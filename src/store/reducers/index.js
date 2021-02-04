import { setStackReducer } from './setStackReducer'
import { authReducer } from './authReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  setStackReducer,
  authReducer
})

export default rootReducer
