import React from 'react';
import UserCard from './UserCard';
import { SocialButton } from './SocialButton';

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

const rawClasses = {
  container: {
  }
};

const { classes } = jss.createStyleSheet(rawClasses).attach();

type Props = {
};
type State = {
  logged: boolean;
  user: any;
  currentProvider: any;
};

export class Auth extends React.PureComponent<Props, State> {
  state = {
    logged: false,
    user: {},
    currentProvider: ''
  };

  nodes = {}

  setNodeRef = (provider, node) => {
    console.log('setNodeRef, provider=', provider, ', node=', node);
    if (node) {
      this.nodes[provider] = node;
      console.log('setNodeRef is done, provider=', this.nodes);
    }
  }

  onLoginSuccess = (user) => {
    console.log('onLoginSuccess', user);

    this.setState({
      logged: true,
      currentProvider: user._provider,
      user
    });
  }

  onLoginFailure = (err) => {
    console.log('onLoginFailure', err);

    this.setState({
      logged: false,
      currentProvider: '',
      user: {}
    });
  }

  onLogoutSuccess = () => {
    console.log('onLogoutSuccess');

    this.setState({
      logged: false,
      currentProvider: '',
      user: {}
    });
  }

  onLogoutFailure(err) {
    console.log('onLogoutFailure', err);
  }

  logout = () => {
    console.log('logout clicked');
    const { logged, currentProvider } = this.state;
    console.log('logout, logged=', logged, ', currentProvider=', currentProvider);

    if (logged && currentProvider) {
      this.nodes[currentProvider].props.triggerLogout();
      console.log('logout, triggerLogout is done');
      this.setState({ logged: false });
    }
  }

  render() {
    let children;

    if (this.state.logged) {
      children = <UserCard user={this.state.user} logout={this.logout} />;
      console.log('render, is loggeed');
    } else {
      children = [
        <SocialButton
          provider="facebook"
          appId={'222305345301459'}
          onLoginSuccess={this.onLoginSuccess}
          onLoginFailure={this.onLoginFailure}
          onLogoutSuccess={this.onLogoutSuccess}
          getInstance={(instance: any) => { this.setNodeRef('facebook', instance) }}
          key={'facebook'}
        >
          Login with Facebook
        </SocialButton>
      ];
      console.log('render, need login');
    }

    return (
      <div className={classes.container}>
        {children}
      </div>
    );
  }
}
