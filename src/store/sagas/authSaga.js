/* eslint-disable generator-star-spacing */
import { take, call, put } from 'redux-saga/effects'
import { AUTH_REQUEST, SET_STACK } from '../actions/actionTypes'

// not calling the sagas
function* workLoginSaga() {
  const a = yield call(asyncFunc)
  yield put({ type: SET_STACK, payload: a })
}
function asyncFunc() {
  return 'swing'
}

export function* watchLoginSaga() {
  yield take(AUTH_REQUEST, workLoginSaga)
}
