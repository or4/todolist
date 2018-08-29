import React from 'react';
import { TWord } from 'types';

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

const rawClasses = {
  container: {
    display: 'flex',
    lineHeight: '23px',
    width: '200px',

    '& > div': {
      width: '50%',
    }
  }
};

const { classes } = jss.createStyleSheet(rawClasses).attach();

type Props = {
  word: TWord;
};
type State = {
};

export class Word extends React.PureComponent<Props, State> {
  getStyle() {
    const container = {
    };
    return {
      container,
    };
  }
  render() {
    const { word } = this.props;
    return (
      <div className={classes.container}>
        <div>{word.word}</div>
        <div>{word.translate}</div>
      </div>
    );
  }
}
