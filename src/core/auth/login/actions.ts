import { Action } from 'redux';

import { IUser } from '../types';

export enum ActionTypes {
  LOGIN_SET_INITIAL_STATE = '[Auth/login] Login set initial state',

  LOGIN_REQUEST = '[Auth/login] Login request',
  LOGIN_REQUEST_SUCCESS = '[Auth/login] Login request success',
  LOGIN_REQUEST_FAIL = '[Auth/login] Login request fail',
}

// Login Set InitialState

export class LoginSetInitialState implements Action {
  public readonly type = ActionTypes.LOGIN_SET_INITIAL_STATE;
  constructor() { }
}

// Login Request

export class LoginRequest implements Action {
  public readonly type = ActionTypes.LOGIN_REQUEST;
  constructor(public email: string, public password: string) { }
}

export class LoginRequestSuccess implements Action {
  readonly type = ActionTypes.LOGIN_REQUEST_SUCCESS;
  constructor(public user: IUser) { }
}

export class LoginRequestFail implements Action {
  readonly type = ActionTypes.LOGIN_REQUEST_FAIL;
  constructor(public error: any) { }
}


export type ActionsAll = LoginSetInitialState
  | LoginRequest
  | LoginRequestSuccess
  | LoginRequestFail;
