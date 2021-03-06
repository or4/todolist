import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { List } from 'scenes/List';

type Props = {};
type State = {};

export class Main extends React.Component<Props, State> {
  render() {
    return (
      <Switch>
        <Route path="/" component={List} />
      </Switch>
    );
  }
}
