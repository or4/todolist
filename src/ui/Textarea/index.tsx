import React from 'react';
import * as R from 'ramda';
import { isNotNil, joinWithSpace } from 'helpers';
import { theme, lightFont, borderBottom } from 'ui/theme';

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

const rawClasses = {
  container: {
    alignItems: 'center',
    display: 'flex',
    padding: '5px 8px',
    width: '100%',

    ...borderBottom(),
  },
  input: {
    border: '0',
    height: '38px',
    outline: 'none',
    width: '100%',

    ...lightFont(theme.colors.greySecond, '16px', '28px')
  }
};

const { classes } = jss.createStyleSheet(rawClasses).attach();

type State = {
};

type Props = {
  className?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  value: string;
};

export class Textarea extends React.Component<Props, State> {
  onChange = (event: any) => {
    const text: string = R.path(['target', 'value'], event);
    isNotNil(text) && this.props.onChange(text);
  }

  render() {
    const { className, placeholder, value } = this.props;

    return (
      <div className={classes.container}>
        <input
          className={joinWithSpace(classes.input, className)}
          onChange={this.onChange}
          placeholder={placeholder}
          value={value}
        />
      </div>
    );
  }
}
