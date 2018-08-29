import React from 'react';

type State = {
  isFocus: boolean;
};

class InputBase extends React.PureComponent<any, State> {
  refInput: any = React.createRef();
  state = { isFocus: false };

  focusInputBase = () => {
    this.refInput &&
      this.refInput.current &&
        this.refInput.current.focus &&
          this.refInput.current.focus();
  }
  selectInputBase = () => {
    this.refInput &&
      this.refInput.current &&
        this.refInput.current.select &&
          this.refInput.current.select();
  }

  onBlur = () => {
    this.setState({ isFocus: false });
    this.props.onBlur && this.props.onBlur();
  }
  onFocus = () => {
    this.setState({ isFocus: true });
    this.props.onFocus && this.props.onFocus();
  }

  render() {
    const { /* skiped ---> */ refInput, onFocus, onBlur, /* <--- skiped */ placeholder, ...props } = this.props;
    return (
      <input
        ref={this.refInput}
        onBlur={this.onBlur}
        onFocus={this.onFocus}
        placeholder={this.state.isFocus ? '' : placeholder}
        {...props}
      />
    );
  }
}
export default InputBase;
