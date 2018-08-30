import React from 'react';
import { Textarea } from 'ui/Textarea';

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

const rawClasses = {
  container: {
    maxHeight: '88px',
    minHeight: '88px',
  }
};

const { classes } = jss.createStyleSheet(rawClasses).attach();

type Props = {
  onChange: (text: string) => void;
  value: string;
};
type State = {
};

export class TranslateTextarea extends React.PureComponent<Props, State> {
  render() {
    const { value, onChange } = this.props;
    return (
      <Textarea
        className={classes.container}
        onChange={onChange}
        placeholder="Enter translate (you can paste several words separated by hyphen and new lines..)"
        value={value}
      />
    );
  }
}
