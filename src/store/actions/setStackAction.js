import { SET_STACK } from './actionTypes'

export const setStack = name => {
  return {
    type: SET_STACK,
    payload: name
  }
}
