import { take, call, put, takeLatest, cancel, select } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';

import { notify } from 'react-notify-toast';

import { makeSelectErrors } from 'containers/Register/selectors';
import { fieldsLoaded, failedLoadingFields } from './actions';

import {
  GET_FIELDS_FROM_SERVER,
  FAILED_LODING_FIELDS,
  NOTIFY_WAS_SHOWN,
} from './constants';

import {
  getFields,
} from './models';


export function* getRepos() {
  try {
    const repos = yield call(getFields, 11);
    yield put(fieldsLoaded(repos.data));
  } catch (err) {
    yield put(failedLoadingFields(err));
  }
}

export function* showNotify() {
  const error = yield select(makeSelectErrors());
  notify.show(error.message, 'error', 3000);
  yield put({ type: NOTIFY_WAS_SHOWN });
}

export function* fieldsData() {
  const watcher = yield takeLatest(GET_FIELDS_FROM_SERVER, getRepos);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export function* notifyError() {
  const watcher = yield takeLatest(FAILED_LODING_FIELDS, showNotify);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// Bootstrap sagas
export default [
  fieldsData,
  notifyError,
];
