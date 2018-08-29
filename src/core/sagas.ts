
import { all } from 'redux-saga/effects';
import auth from './auth/sagas';

export function* sagas() {
  yield all([
    auth,
  ].reduce((allSagas, sagas) => allSagas.concat(sagas), []));
}
