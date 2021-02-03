/* eslint-disable generator-star-spacing */
import { takeLatest, call, put } from 'redux-saga/effects'
import { Auth } from '../../firebase'
import { SIGNUP } from '../actions/actionTypes'
import { authError, authRequest, authSuccess } from '../actions/authAction'

function* workSignupSaga(action) {
  yield put(authRequest())
  try {
    const signupRes = yield call(asyncSignup, action.email, action.password)
    console.log(signupRes)
    yield put(authSuccess(signupRes))
    console.log(action.email + ' ' + action.password)
  } catch (error) {
    console.log(error)
    yield put(authError('error'))
  }
}

function asyncSignup(email, password) {
  return Auth.createUserWithEmailAndPassword(email, password)
}

export function* watchSignupSaga() {
  yield takeLatest(SIGNUP, workSignupSaga)
}
