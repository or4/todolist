import React from 'react';
import { InputBase } from './InputBase';
import { theme, lightFont } from 'ui/theme';

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

const rawClasses = {
  container: {
    alignItems: 'center',
    display: 'flex',
    width: '100%',

    borderTop: '0',
    borderRight: '0',
    borderLeft: '0',
    borderBottom: `1px solid ${theme.colors.shadow}`,
  },
  input: {
    border: '0',
    height: '38px',
    outline: 'none',
    width: '100%',

    boxSizing: 'border-box' as 'border-box',
    ...lightFont(theme.colors.greySecond, '16px')
  }
};

const { classes } = jss.createStyleSheet(rawClasses).attach();



type Props = {
  onBlur?: Function;
  onChange: Function;
  placeholder?: string;
  value: string;
};

type State = {
};

export class Input extends React.Component<Props, State> {
  onChange = (event: any) => {
    this.props.onChange &&
      this.props.onChange(event.target.value);
  }
  onBlur = () => {
    this.props.onBlur &&
      this.props.onBlur();
  }

  render() {
    const { placeholder, value } = this.props;

    return (
      <div className={classes.container}>
        <InputBase
          className={classes.input}
          onBlur={this.onBlur}
          onChange={this.onChange}
          placeholder={placeholder}
          value={value}
        />
      </div>
    );
  }
}
