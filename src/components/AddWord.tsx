import React from 'react';
import Input from 'ui/Input';

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

const rawClasses = {
  container: {
    display: 'flex',
    lineHeight: '23px',
    // width: '200px',

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
  onWordChange = (word: string) => {
    this.setState({ word, });
  }
  onTraslateChange = (translate: string) => {
    this.setState({ translate, });
  }
  render() {
    const { word, translate } = this.state;
    return (
      <div className={classes.container}>
        <div><Input onChange={this.onWordChange} placeholder="Enter word" value={word} /> </div>
      </div>
    );
  }
}

