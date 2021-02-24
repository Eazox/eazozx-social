/* eslint-disable generator-star-spacing */
import { takeLatest, call, put } from 'redux-saga/effects'
import { Auth, Db } from '../../firebase'
// import { setStack } from '../actions/setStackAction'
import { SIGNUP } from '../actions/actionTypes'
import { authError, authRequest } from '../actions/authAction'

function* workSignupSaga(action) {
  yield put(authRequest())
  try {
    const signupRes = yield call(asyncSignup, action.email, action.password)
    yield call(
      asyncAddCredentials,
      signupRes.user.uid,
      action.fullName,
      action.username,
      action.gender,
      action.email,
      action.phone
    )
    // yield put(authSuccess(signupRes))
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      yield put(authError('Email is already in use, try another'))
    } else {
      yield put(authError('Authentication failed, check your internet connection'))
    }
  }
}

function asyncSignup(email, password) {
  return Auth.createUserWithEmailAndPassword(email, password)
}

function asyncAddCredentials(uid, fullName, username, gender, email, phone) {
  return Db.collection('users')
    .doc(uid)
    .set({
      displayName: username,
      fullName: fullName,
      email: email,
      gender: gender,
      phone: `+234${phone}`
    })
}

export function* watchSignupSaga() {
  yield takeLatest(SIGNUP, workSignupSaga)
}
