import { SET_PAGE } from './actionTypes'

export const setPage = name => {
  return {
    type: SET_PAGE,
    payload: name
  }
}
