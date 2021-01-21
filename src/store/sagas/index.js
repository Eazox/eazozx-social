/* eslint-disable generator-star-spacing */
import { watchLoginSaga } from './authSaga'
import { all, fork } from 'redux-saga/effects'

export default function* rootSaga() {
  yield all([fork(watchLoginSaga)])
}
