import { Reducer } from 'redux';
import { ActionTypes, ActionsAll } from './actions';
import { TWord } from 'types';
import { AppState } from 'store';

type TState = {
  error?: any;
  /* eslint-disable no-use-before-define */
  list: TWord[];
  /* eslint-enable no-use-before-define */
  requesting?: boolean;
};

const initialState: TState = {
  list: [{ word: 'test', translate: 'test translate' }],
  requesting: false,
};

export type TListState = TState;
export const listInitialState = initialState;
export const list: Reducer<TState> = (state: TState = initialState, action: ActionsAll) => {
  switch (action.type) {
    case ActionTypes.LIST_SET_INITIAL_STATE:
      return initialState;
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

