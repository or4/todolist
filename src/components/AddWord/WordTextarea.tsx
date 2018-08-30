import React from 'react';
import { Textarea } from 'ui/Textarea';

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

const rawClasses = {
  container: {
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
        onChange={onChange}
        placeholder="Enter word"
        value={value}
      />
    );
  }
}
