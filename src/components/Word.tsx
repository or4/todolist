import React from 'react';
import { TWord } from 'types';
import { CloseSvg } from 'ui/svg/CloseSvg';

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

const rawClasses = {
  container: {
    alignItems: 'center',
    cursor: 'default',
    display: 'flex',
    lineHeight: '27px',
    width: '100%',
  },
  wordContainer: {
    width: '200px',
  },
  translateContainer: {
    flexGrow: '1' as any
  },
  removeContainer: {
    marginRight: '0',
    marginLeft: 'auto',
  },
};

const { classes } = jss.createStyleSheet(rawClasses).attach();

type Props = {
  word: TWord;
  onRemove: (word: TWord) => void;
};
type State = {
};

export class Word extends React.PureComponent<Props, State> {
  onClick = () => {
    const { onRemove, word } = this.props;
    onRemove(word);
  }
  render() {
    const { word, translate } = this.props.word;
    return (
      <div className={classes.container}>
        <div className={classes.wordContainer} title={word}>{word}</div>
        <div className={classes.translateContainer} title={translate}>{translate}</div>
        <div className={classes.removeContainer} onClick={this.onClick}><CloseSvg /></div>
      </div>
    );
  }
}
