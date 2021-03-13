/* eslint-disable generator-star-spacing */
import { takeLatest, call, put } from 'redux-saga/effects'
import { Auth } from '../../firebase'
// import { setStack } from '../actions/setStackAction'
import { authRequest, authSuccess, authError } from '../actions/authAction'
import { LOGIN } from '../actions/actionTypes'

// not calling the sagas
function* workLoginSaga(action) {
  yield put(authRequest())
  try {
    const loginRes = yield call(asyncLogin, action.email, action.password)
    yield put(authSuccess(loginRes.user))
  } catch (err) {
    if (err.code === 'auth/user-not-found') {
      yield put(authError('User not found'))
    } else if (err.code === 'auth/wrong-password') {
      yield put(authError('Password is incorrect'))
    } else {
      yield put(authError('Authentication failed, check your internet connection'))
    }
  }
}

function asyncLogin(email, password) {
  return Auth.signInWithEmailAndPassword(email, password)
}

export function* watchLoginSaga() {
  yield takeLatest(LOGIN, workLoginSaga)
}
