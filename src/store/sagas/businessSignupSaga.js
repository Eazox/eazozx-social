/* eslint-disable generator-star-spacing */
import { takeLatest, call, put } from 'redux-saga/effects'
import { Auth, Db } from '../../firebase'
// import { setStack } from '../actions/setStackAction'
import { BSIGNUP } from '../actions/actionTypes'
import { authError, authRequest } from '../actions/authAction'

function* workBSignupSaga(action) {
  yield put(authRequest())
  try {
    yield call(
      asyncAddBusinessCredentials,
      Auth.currentUser.uid,
      action.bName,
      action.location,
      action.website,
      action.startTime,
      action.endTime,
      action.tags
    )
  } catch (error) {
    yield put(authError(error))
  }
}

function asyncAddBusinessCredentials(uid, bName, location, website, startTime, endTime, tags) {
  return Db.collection('users').doc(uid).set(
    {
      businessName: bName,
      location: location,
      website: website,
      startTime: startTime,
      endTime: endTime,
      tags: tags
    },
    { merge: true }
  )
}

export function* watchBSignupSaga() {
  yield takeLatest(BSIGNUP, workBSignupSaga)
}
