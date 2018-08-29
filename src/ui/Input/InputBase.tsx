import React from 'react';
import * as R from 'ramda';
import { isNotNil } from 'helpers';

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

const rawClasses = {
  container: {
    padding: '5px 8px'
  },
};

type State = {
  isFocus: boolean;
};

const { classes } = jss.createStyleSheet(rawClasses).attach();

class InputBase extends React.PureComponent<any, State> {
  refInput: any = React.createRef();
  state = { isFocus: false };

  focusInputBase = () => {
    R.pipe(
      R.path(['refInput', 'current', 'focus']),
      R.when(isNotNil, R.nthArg(0)())
    )(this);
  }
  selectInputBase = () => {
    R.pipe(
      R.path(['refInput', 'current', 'select']),
      R.when(isNotNil, R.nthArg(0)())
    )(this);
  }

  onBlur = () => {
    this.setState({ isFocus: false });
    R.when(isNotNil, R.nthArg(0)(), this.props.onBlur);
  }
  onFocus = () => {
    this.setState({ isFocus: true });
    R.when(isNotNil, R.nthArg(0)(), this.props.onFocus);
  }

  render() {
    const { /* skiped ---> */ refInput, onFocus, onBlur, /* <--- skiped */ className, placeholder, ...props } = this.props;
    return (
      <input
        className={R.unapply(R.join(' '))(classes.container, className)}
        ref={this.refInput}
        onBlur={this.onBlur}
        onFocus={this.onFocus}
        placeholder={this.state.isFocus ? '' : placeholder}
        type="text"
        {...props}
      />
    );
  }
}
export default InputBase;
