import PropTypes from 'prop-types';
import React, { Component } from 'react';

import SocialLogin from '../AuthTest/source/index';
// import SocialLogin from 'react-social-login';

type Props = {
  triggerLogin: () => void;
  triggerLogout: () => void;
};

class Button extends Component<Props> {
  static propTypes = {
    triggerLogin: PropTypes.func.isRequired,
    triggerLogout: PropTypes.func.isRequired
  }

  render() {
    const { children, triggerLogin, triggerLogout, ...props } = this.props;

    return (
      <div onClick={triggerLogin} {...props}>
        {children}
      </div>
    );
  }
}

export const SocialButton = SocialLogin(Button as any);
