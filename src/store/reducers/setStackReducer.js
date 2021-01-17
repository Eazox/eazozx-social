import { SET_STACK } from '../actions/actionTypes'

export const setStackReducer = (state = 'splashscreen', action) => {
  switch (action.type) {
    default:
      return state
    case SET_STACK:
      return action.payload
  }
}
