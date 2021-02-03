import { AUTH_SUCCESS, AUTH_ERROR, AUTH_REQUEST } from '../actions/actionTypes'

const initialState = {
  user: null,
  loading: false,
  error: null
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
    case AUTH_REQUEST:
      return { ...state, loading: true }
    case AUTH_SUCCESS:
      return { ...state, user: action.user, loading: false }
    case AUTH_ERROR:
      return { ...state, user: null, loading: false, error: action.error }
  }
}
