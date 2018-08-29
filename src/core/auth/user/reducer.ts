import { Reducer } from 'redux';

import { ActionTypes as LoginActionTypes, ActionsAll as LoginActionsAll } from '../login/actions';
import { IUser } from '../types';
import { AppState } from 'store';

type TState = IUser;

const initialState: TState = {
  name: '',
  surname: '',
  email: '',
};

export type TUserState = TState;
export const userInitialState = initialState;
export const user: Reducer<TState> = (state: TState = initialState, action: LoginActionsAll) => {
  switch (action.type) {
    case LoginActionTypes.LOGIN_REQUEST_SUCCESS: return { ...action.user };
    default: return state;
  }
};

export const selectUser = (state: AppState): TUserState => state.auth.user;

export const selectUserName = (state: AppState): string => {
  const user = selectUser(state);
  return `${user.name} ${user.surname}`;
};
