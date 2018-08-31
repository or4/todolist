import PropTypes from 'prop-types';
import React, { Component } from 'react';

import SocialLogin from '../source/index';
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
    const style = {
      background: '#eee',
      border: '1px solid black',
      borderRadius: '3px',
      display: 'inline-block',
      margin: '5px',
      padding: '10px 20px'
    };

    return (
      <div onClick={triggerLogin} style={style} {...props}>
        {children}
      </div>
    );
  }
}

export default SocialLogin(Button as any);
