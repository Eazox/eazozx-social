import { SIGNUP, LOGIN, AUTH_SUCCESS, AUTH_ERROR, AUTH_REQUEST } from './actionTypes'

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

export const signup = (email, password, username, fullName, gender, phone) => {
  return {
    type: SIGNUP,
    email: email,
    password: password,
    username: username,
    fullName: fullName,
    gender: gender,
    phone: phone
  }
}

export const login = (email, password) => {
  return {
    type: LOGIN,
    email: email,
    password: password
  }
}
