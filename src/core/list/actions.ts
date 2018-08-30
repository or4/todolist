import { Action } from 'redux';
import { TWord } from 'types';

export enum ActionTypes {
  SET_INITIAL_STATE = 'List/set initial state',

  LIST_ADD_WORD = 'List/add word',
  LIST_ADD_WORD_SUCCESS = 'List/add word success',
  LIST_ADD_WORD_FAIL = 'List/add word fail',

  LIST_REMOVE_WORD = 'List/remove word',
  LIST_REMOVE_WORD_SUCCESS = 'List/remove word success',
  LIST_REMOVE_WORD_FAIL = 'List/remove word fail',

  LIST_REQUEST = 'List/list request',
  LIST_REQUEST_SUCCESS = 'List/list request success',
  LIST_REQUEST_FAIL = 'List/list request fail',
}

// List Set InitialState

export class ListSetInitialState implements Action {
  public readonly type = ActionTypes.SET_INITIAL_STATE;
  constructor() { }
}

// List Add word

export class ListAddWord implements Action {
  public readonly type = ActionTypes.LIST_ADD_WORD;
  constructor(public word: TWord) { }
}

export class ListAddWordSuccess implements Action {
  readonly type = ActionTypes.LIST_ADD_WORD_SUCCESS;
  constructor() { }
}

export class ListAddWordFail implements Action {
  readonly type = ActionTypes.LIST_ADD_WORD_FAIL;
  constructor(public error: any) { }
}

// List Remove word

export class ListRemoveWord implements Action {
  public readonly type = ActionTypes.LIST_REMOVE_WORD;
  constructor(public word: TWord) { }
}

export class ListRemoveWordSuccess implements Action {
  readonly type = ActionTypes.LIST_REMOVE_WORD_SUCCESS;
  constructor() { }
}

export class ListRemoveWordFail implements Action {
  readonly type = ActionTypes.LIST_REMOVE_WORD_FAIL;
  constructor(public error: any) { }
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
  | ListAddWord
  | ListAddWordSuccess
  | ListAddWordFail
  | ListRemoveWord
  | ListRemoveWordSuccess
  | ListRemoveWordFail
  | ListRequest
  | ListRequestSuccess
  | ListRequestFail;

