import { Reducer } from 'redux';
import * as R from 'ramda';
import { AppState } from 'store';
import { TWord } from 'types';
import { ActionTypes, ActionsAll } from './actions';

type TState = {
  error?: any;
  /* eslint-disable no-use-before-define */
  list: TWord[];
  /* eslint-enable no-use-before-define */
  requesting?: boolean;
};

const initialState: TState = {
  list: [],
  requesting: false,
};

export type TListState = TState;
export const listInitialState = initialState;
export const list: Reducer<TState> = (state: TState = initialState, action: ActionsAll) => {
  switch (action.type) {
    case ActionTypes.SET_INITIAL_STATE:
      return initialState;
    case ActionTypes.LIST_ADD_WORD:
      return { ...state, list: R.insert(-1, action.word, state.list) };
    case ActionTypes.LIST_REQUEST:
      return { ...state, requesting: true };
    case ActionTypes.LIST_REQUEST_SUCCESS:
      return { ...state, requesting: false, error: false };
    case ActionTypes.LIST_REQUEST_FAIL:
      return { ...state, requesting: false, error: action.error };

    default: return state;
  }
};

export const selectList = (state: AppState): TListState => state.list;



// export type TAuthState = {
//   list: TListState;
//   user: TUserState;
// };

// export const authInitialState: TAuthState = {
//   list: listInitialState,
//   user: userInitialState,
// };

