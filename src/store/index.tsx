import { createStore, applyMiddleware, compose, Action, Middleware, MiddlewareAPI, Dispatch } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createHashHistory';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';

import { createRootReducer, AppState, appInitialState } from 'core/reducer';
import { sagas } from '../core/sagas';

import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';

export const history = createHistory();
const navMiddleware = routerMiddleware(history);

const sagaMiddleware = createSagaMiddleware();

const actionToPlainObject: Middleware =
  (api: MiddlewareAPI<void>) =>
    (next: Dispatch<void>) =>
      <A extends Action>(action: A) => {
        // console.log(action);
        return next(Object.assign({}, action));
      };


const enhancer = compose(applyMiddleware(sagaMiddleware, navMiddleware, actionToPlainObject),
  (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
);


const persistConfig = {
  storage: storage,
  key: 'root2',
  stateReconciler: autoMergeLevel2,
  whitelist: ['auth', 'list'],
  blacklist: [],
};

const rootReducer =  createRootReducer(storage);
const persistedReducer = persistReducer(persistConfig as any, rootReducer as any);

const store = createStore<AppState>(persistedReducer as any, appInitialState, enhancer as any);
sagaMiddleware.run(sagas);
const persistor = persistStore(store);

export { store, persistor, AppState };
