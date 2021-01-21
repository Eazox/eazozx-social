import { AUTH_SUCCESS, AUTH_ERROR, AUTH_REQUEST } from './actionTypes'

export const authSuccess = cred => {
  return {
    type: AUTH_SUCCESS,
    payload: cred
  }
}

export const authError = cred => {
  return {
    type: AUTH_ERROR,
    payload: cred
  }
}

export const authRequest = _ => {
  return {
    type: AUTH_REQUEST
  }
}
