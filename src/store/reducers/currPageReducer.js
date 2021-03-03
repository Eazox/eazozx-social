import { SET_PAGE } from '../actions/actionTypes'
export const setPageReducer = (state = 'display', action) => {
  switch (action.type) {
    default:
      return state
    case SET_PAGE:
      return action.payload
  }
}
