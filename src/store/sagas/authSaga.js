/* eslint-disable no-undef */
/* eslint-disable generator-star-spacing */
import axios from 'axios'
import { takeLatest, call, put } from 'redux-saga/effects'
import { AUTH_REQUEST, SET_STACK } from '../actions/actionTypes'

// not calling the sagas
function* workLoginSaga() {
  try {
    const a = yield call(asyncFunc)
    yield put({ type: SET_STACK, payload: a.data.title })
  } catch (err) {
    // console.log(err)
    yield put({ type: SET_STACK, payload: '2' })
  }
}
function asyncFunc() {
  return axios({
    method: 'get',
    url: 'https://jsonplaceholder.typicode.com/todos/2'
  })
}

export function* watchLoginSaga() {
  yield takeLatest(AUTH_REQUEST, workLoginSaga)
}
