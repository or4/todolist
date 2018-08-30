import React from 'react';
import * as R from 'ramda';
import { callWhenIsNotNil } from 'helpers';

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

const rawClasses = {
  container: {
    background: 'transparent',
    padding: '5px 8px',
    // lineHeight: '28px',


    '&::placeholder': {
      // color: 'white'
    }
  },
};

type State = {
  isFocus: boolean;
};

const { classes } = jss.createStyleSheet(rawClasses).attach();

export class TextareaBase extends React.PureComponent<any, State> {
  refInput: any = React.createRef();
  state = { isFocus: false };

  focusInputBase = () => {
    callWhenIsNotNil(['refInput', 'current', 'focus'], this);
  }
  selectInputBase = () => {
    callWhenIsNotNil(['refInput', 'current', 'select'], this);
  }

  onBlur = () => {
    this.setState({ isFocus: false });
    callWhenIsNotNil(['onBlur'], this.props);
  }
  onFocus = () => {
    this.setState({ isFocus: true });
    callWhenIsNotNil(['onFocus'], this.props);
  }

  render() {
    const { /* skiped ---> */ refInput, onFocus, onBlur, /* <--- skiped */ className, placeholder, ...props } = this.props;
    return (
      <textarea
        className={R.unapply(R.join(' '))(classes.container, className)}
        ref={this.refInput}
        onBlur={this.onBlur}
        onFocus={this.onFocus}
        placeholder={this.state.isFocus ? '' : placeholder}
        {...props}
      />
    );
  }
}
