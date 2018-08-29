import { combineReducers } from 'redoodle';
import { login, TLoginState, loginInitialState } from './login/reducer';
import { user, TUserState, userInitialState } from './user/reducer';

export type TAuthState = {
  login: TLoginState;
  user: TUserState;
};

export const authInitialState: TAuthState = {
  login: loginInitialState,
  user: userInitialState,
};

export const auth =  combineReducers<TAuthState>({
  login,
  user,
});
