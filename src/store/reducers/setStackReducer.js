import { SET_STACK } from '../actions/actionTypes'

export const setStackReducer = (state = 'splashScreen', action) => {
  switch (action.type) {
    default:
      return state
    case SET_STACK:
      return action.payload
  }
}
