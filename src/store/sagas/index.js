/* eslint-disable generator-star-spacing */
// import { watchLoginSaga } from './loginSaga'
import { watchSignupSaga } from './signupSaga'
import { watchLoginSaga } from './loginSaga'
import { all, fork } from 'redux-saga/effects'

export default function* rootSaga() {
  yield all([fork(watchSignupSaga), fork(watchLoginSaga)])
}
