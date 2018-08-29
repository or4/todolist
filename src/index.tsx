import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { Provider } from 'react-redux';

import { store,  history, persistor } from './store';
import { Main } from './Main';
import './index.scss';

const App = () => (
  <Provider store={store}>
    <PersistGate loading={<div>Loading</div>} persistor={persistor}>
      <ConnectedRouter history={history}>
        <Route path="/" component={Main} />
      </ConnectedRouter>
    </PersistGate>
  </Provider>
);

const rootElement = document.getElementById('root');
if (rootElement != null) {
  ReactDOM.render(<App />, rootElement);
}
