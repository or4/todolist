
import { Action } from 'redux';

export enum ActionTypes {
  USER_SET_INITIAL_STATE = '[Auth/user] User set initial state'
}

// User Set InitialState

export class UserSetInitialState implements Action {
  public readonly type = ActionTypes.USER_SET_INITIAL_STATE;
  constructor() { }
}

export type ActionsAll = Action;
