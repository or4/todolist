import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState } from 'core';
import { ListAddWord } from 'core/list/actions';
import { TWord } from 'types';
import * as R from 'ramda';
import { isNotNil, callWhenIsNotNil } from 'helpers';
import { Input } from 'ui/Input';
import { SendSvg } from 'ui/svg/SendSvg';

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

const rawClasses = {
  container: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    lineHeight: '23px',
  },
  wordContainer: {
  },
  translateContainer: {
  },
  submitContainer: {
    height: '24px'
  },
};

const { classes } = jss.createStyleSheet(rawClasses).attach();

type StateProps = {
};
type DispatchProps = {
  addWord: (word: TWord) => void;
};
type Props = StateProps & DispatchProps;

type State = {
  word: string;
  translate: string;
};

const initialState = {
  word: '',
  translate: '',
};

export class AddWordComponent extends React.PureComponent<Props, State> {
  state = initialState
  onWordChange = (word: string) => {
    const obj = { word, };
    if (R.anyPass([R.propSatisfies(R.contains('-'), 'word'), R.propSatisfies(R.contains('\n'), 'word')])(obj)) {
      const words: TWord[] = R.pipe(
        R.split('\n'),
        R.map(R.pipe(
          R.split('-'),
          R.map(R.trim),
          wordArr => ({ word: wordArr[0], translate: wordArr[1] })
        )),
      )(word);

      R.forEach((value: TWord) => {
        this.props.addWord(value);
      })(words);
      return;
    }
    this.setState({ word, });
  }
  onTraslateChange = (translate: string) => {
    this.setState({ translate, });
  }
  composeWord(): TWord {
    const { word, translate } = this.state;
    return { word, translate };
  }
  onSubmit = (event?: any) => {
    callWhenIsNotNil(['preventDefault'], event);

    this.props.addWord(this.composeWord());
    this.setState(initialState);
  }
  render() {
    const { word, translate } = this.state;
    return (
      <form className={classes.container} onSubmit={this.onSubmit}>
        <div className={classes.wordContainer}>
          <Input onChange={this.onWordChange} placeholder="Enter word" value={word} />
        </div>
        <div className={classes.translateContainer}>
          <Input onChange={this.onTraslateChange} placeholder="Enter translate" value={translate} />
        </div>
        <div className={classes.submitContainer} >
          <SendSvg onClick={this.onSubmit} />
        </div>
        <button type="submit" style={{ display: 'none' }} />
      </form>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
});

const mapDispatchToProps = (dispatch: Dispatch<DispatchProps>) => ({
  addWord: (word: TWord) => {
    dispatch(new ListAddWord(word));
  }
});
export const AddWord = connect<StateProps, DispatchProps, void>(mapStateToProps, mapDispatchToProps)(AddWordComponent);
