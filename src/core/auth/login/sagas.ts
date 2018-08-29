import { takeLatest, put, call, select, take } from 'redux-saga/effects';

import {
  ActionTypes, LoginRequest, LoginRequestFail, LoginRequestSuccess,
} from './actions';
import api from 'core/services/api';

import { selectLogin } from './reducer';

// step 2. Login Request and get token
function* login(loginRequest: LoginRequest) {
  const { email, password } = loginRequest;
  try {
    const { hash } = yield select(selectLogin);
    const result = yield call(api.post, 'auth/signin', { email, password, hash, device: 'ios' });

    const { status, data } = result;
    if (data && data.preventDefault) { return }
    if (status !== 200) throw result;

    yield put(new LoginRequestSuccess(data.user));
  } catch (e) {
    yield put(new LoginRequestFail(e));
  }
}


export default [
  takeLatest(ActionTypes.LOGIN_REQUEST, login),
];
