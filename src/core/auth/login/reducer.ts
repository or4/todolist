import { Reducer } from 'redux';

import { ActionTypes, ActionsAll } from './actions';

type TState = {
  email: string;
  error?: any;
  requesting?: boolean;
  password: string;
};

const initialState: TState = {
  email: '',
  password: '',
  requesting: false,
};

export type TLoginState = TState;
export const loginInitialState = initialState;
export const login: Reducer<TState> = (state: TState = initialState, action: ActionsAll) => {
  switch (action.type) {
    case ActionTypes.LOGIN_SET_INITIAL_STATE:
      return initialState;
    case ActionTypes.LOGIN_REQUEST:
      return { ...state, requesting: true };
    case ActionTypes.LOGIN_REQUEST_SUCCESS:
      return { ...state, requesting: false, error: false };
    case ActionTypes.LOGIN_REQUEST_FAIL:
      return { ...state, requesting: false, error: action.error };

    default: return state;
  }
};

export const selectLogin = (state: any): TLoginState => state.auth.login;

