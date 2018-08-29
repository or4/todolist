import { all } from 'redux-saga/effects';
import auth from '../core/auth/sagas';

export default function* sagas() {
  yield all([
    ...auth,
  ].reduce((allSagas, saga) => (allSagas as any).concat(saga), []));
}
