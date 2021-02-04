/* eslint-disable generator-star-spacing */
import { takeLatest, call, put } from 'redux-saga/effects'
import { Auth } from '../../firebase'
import { setStack } from '../actions/setStackAction'
import { authRequest, authSuccess, authError } from '../actions/authAction'
import { LOGIN } from '../actions/actionTypes'

// not calling the sagas
function* workLoginSaga(action) {
  yield put(authRequest())
  try {
    const loginRes = yield call(asyncLogin, action.email, action.password)
    console.log(loginRes)
    yield put(authSuccess(loginRes.user))
    yield put(setStack('appStack'))
  } catch (err) {
    console.log(err)
    yield put(authError(err))
  }
}

function asyncLogin(email, password) {
  return Auth.signInWithEmailAndPassword(email, password)
}

export function* watchLoginSaga() {
  yield takeLatest(LOGIN, workLoginSaga)
}
