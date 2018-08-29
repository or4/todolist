import React from 'react';
import theme, { lightFont, boxSizing, borderBottom } from 'ui/theme';
import InputBase from './InputBase';

type Props = {
  focusAfterUpdate?: boolean;
  icon?: any;
  iconAlt?: string;
  isAutoFocus?: boolean;
  isPassword?: boolean;
  onBlur?: Function;
  onChange: Function;
  style?: Object;
  placeholder: string;
  value: string;
};

type State = {
};

class Input extends React.Component<Props, State> {
  // refInput: any = React.createRef();

  getStyle(customStyle: any) {
    const container = {
      alignItems: 'center',
      display: 'flex',
      width: '343px',

      ...borderBottom(),
    };

    customStyle && customStyle.container &&
      Object.assign(container, customStyle.container);

    const image = {
      paddingLeft: '4px',
      paddingRight: '4px',
      width: '24px',
    };

    customStyle && customStyle.image &&
      Object.assign(image, customStyle.image);

    const input = {
      border: '0',
      height: '38px',
      outline: 'none',
      width: '100%',
      paddingLeft: this.props.icon ? '15px' : '0',

      ...boxSizing(),
      ...lightFont(theme.colors.coolGrey, '16px')
    };

    customStyle && customStyle.input &&
      Object.assign(input, customStyle.input);

    return {
      container,
      image,
      input,
    };
  }

  componentDidMount() {
    // this.props.isAutoFocus &&
    //   setTimeout(() => { this.refInput.current && this.refInput.current.focus() });
  }
  componentDidUpdate() {
    // this.props.focusAfterUpdate &&
    //   setTimeout(() => { this.refInput.current && this.refInput.current.focus() });
  }
  onChange = (event: any) => {
    this.props.onChange &&
      this.props.onChange(event.target.value);
  }
  onBlur = () => {
    this.props.onBlur &&
      this.props.onBlur();
  }
  getInputType = () => {
    return this.props.isPassword ? 'password' : 'text';
  }

  render() {
    const { icon, iconAlt, placeholder, style: customStyle, value } = this.props;
    const style = this.getStyle(customStyle);
    const inputType = this.getInputType();
    return (
      <div style={style.container}>
        {icon}
        <InputBase
          onBlur={this.onBlur}
          onChange={this.onChange}
          placeholder={placeholder}
          // ref={this.refInput}
          style={style.input}
          type={inputType}
          value={value}
        />
      </div>
    );
  }
}

export default Input;
