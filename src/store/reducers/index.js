import { setStackReducer } from './setStackReducer'
import { setPageReducer } from './currPageReducer'
import { authReducer } from './authReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  stackReducer: setStackReducer,
  authReducer,
  setPageReducer
})

export default rootReducer
