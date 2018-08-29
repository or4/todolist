import { AnyAction, Reducer } from 'redux';
import { combineReducers } from 'redoodle';
import { persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { routerReducer, RouterState } from 'react-router-redux';

import { TAuthState, authInitialState, auth } from './auth/reducer';

export type AppState = {
  router: RouterState;
  auth: TAuthState;
};

export const appInitialState: AppState = {
  router: { location: { pathname: '/', search: '', state: '', hash: '', }},
  auth: authInitialState,
};


export function createRootReducer(storage: any): Reducer<AppState> {
  const authPersistConfig = {
    storage,
    key: 'auth',
    stateReconciler: autoMergeLevel2,
    whitelist: ['user', 'token', 'secured'],
    blacklist: ['login', 'register', 'restore', 'words', 'recovery'],
  };

  const rootReducer = combineReducers<AppState>({
    router: routerReducer,
    auth: persistReducer(authPersistConfig, auth),
  });
  const rootReducerWrapped: Reducer<AppState> = (state: AppState = appInitialState, action: AnyAction) => {
    return rootReducer(state, action);
  };
  return rootReducerWrapped;
}
