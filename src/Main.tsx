import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { List } from 'scenes/List';
import { Auth } from 'components/Auth';

type Props = {};
type State = {};

export class Main extends React.Component<Props, State> {
  render() {
    return (
      <Switch>
        <Route exact={true} path="/" component={List} />
        <Route exact={true} path="/list" component={List} />
        <Route exact={true} path="/auth" component={Auth} />
      </Switch>
    );
  }
}
