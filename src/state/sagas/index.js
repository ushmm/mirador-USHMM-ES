import {
  all, call, spawn,
} from 'redux-saga/effects';

import appSaga from './app.js';
import iiifSaga from './iiif.js';
import windowSaga from './windows.js';
import annotationsSaga from './annotations.js';
import authSaga from './auth.js';

/** */
function* launchSaga(saga) {
  while (true) {
    try {
      yield call(saga);
      break;
    } catch (e) {
      console.log(e);
    }
  }
}

/** */
function getRootSaga(pluginSagas = []) {
  return function* rootSaga() {
    const sagas = [
      annotationsSaga,
      appSaga,
      iiifSaga,
      windowSaga,
      authSaga,
      ...pluginSagas,
    ];

    yield all(sagas.map(saga => spawn(launchSaga, saga)));
  };
}

export default getRootSaga;
