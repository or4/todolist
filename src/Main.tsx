import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { List } from 'scenes/List';

type StateProps = {
};
type DispatchProps = {
};
type Props = StateProps & DispatchProps;
type State = {};

export class Main extends React.Component<Props, State> {
  render() {
    return (
      <Switch>
        <Route path="/list" component={List} />
      </Switch>
    );
  }
}
