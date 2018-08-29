import React from 'react';

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
};
type State = {
  word: string;
  translate: string;
};

export class AddWord extends React.PureComponent<Props, State> {
  state = {
    word: '',
    translate: '',
  }
  render() {
    const { word, translate } = this.state;
    return (
      <div className={classes.container}>
        <div><input type="text" value={word} /> </div>
        <div><input type="text" value={translate} /> </div>
      </div>
    );
  }
}

