import { Action } from 'redux';

export enum ActionTypes {
  LIST_SET_INITIAL_STATE = '[List/list] List set initial state',

  LIST_REQUEST = '[List/list] List request',
  LIST_REQUEST_SUCCESS = '[List/list] List request success',
  LIST_REQUEST_FAIL = '[List/list] List request fail',
}

// List Set InitialState

export class ListSetInitialState implements Action {
  public readonly type = ActionTypes.LIST_SET_INITIAL_STATE;
  constructor() { }
}

// List Request

export class ListRequest implements Action {
  public readonly type = ActionTypes.LIST_REQUEST;
  constructor() { }
}

export class ListRequestSuccess implements Action {
  readonly type = ActionTypes.LIST_REQUEST_SUCCESS;
  constructor() { }
}

export class ListRequestFail implements Action {
  readonly type = ActionTypes.LIST_REQUEST_FAIL;
  constructor(public error: any) { }
}


export type ActionsAll = ListSetInitialState
  | ListRequest
  | ListRequestSuccess
  | ListRequestFail;
