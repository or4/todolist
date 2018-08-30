import React from 'react';
import { Textarea } from 'ui/Textarea';

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

const rawClasses = {
  container: {
    maxWidth: '200px',
    minWidth: '200px',
    resize: 'none' as any,
  }
};

const { classes } = jss.createStyleSheet(rawClasses).attach();

type Props = {
  onChange: (text: string) => void;
  value: string;
};
type State = {
};

export class WordTextarea extends React.PureComponent<Props, State> {
  render() {
    const { value, onChange } = this.props;
    return (
      <Textarea
        className={classes.container}
        onChange={onChange}
        placeholder="Enter word"
        value={value}
      />
    );
  }
}
