import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as R from 'ramda';
import { AppState } from 'core';
import { ListAddWord } from 'core/list/actions';
import { TWord } from 'types';
import { callWhenIsNotNil } from 'helpers';
import { SendSvg } from 'ui/svg/SendSvg';
import { convertTextToWords } from 'utils/words';
import { WordTextarea } from './WordTextarea';
import { TranslateTextarea } from './TranslateTextarea';

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

const rawClasses = {
  form: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column' as 'column',
    justifyContent: 'space-between',
    lineHeight: '23px',
  },

  firstRowContainer: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'flex-start',
    width: '100%',
  },
  wordContainer: {
    width: '200px',
  },
  submitContainer: {
    height: '24px',
    marginLeft: '10px',
  },

  secondRowContainer: {
    minHeight: '76px',
    width: '100%',
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

const callPreventDefaultSafely = callWhenIsNotNil(['preventDefault']);

export class AddWordComponent extends React.PureComponent<Props, State> {
  state = initialState
  onWordChange = (word: string) => {
    if (this.isReadyToAdd(word)) {
      this.addWords(word);
    } else {
      this.setState({ word, });
    }
  }
  onTraslateChange = (translate: string) => {
    if (this.isReadyToAdd(translate)) {
      this.addWords(translate);
    } else {
      this.setState({ translate, });
    }
  }
  onSubmit = (event?: any) => {
    callPreventDefaultSafely(event);

    const word = this.composeWord();
    if (this.isWordEmpty(word)) {
      return;
    }

    this.props.addWord(word);
    this.setState(initialState);
  }

  isReadyToAdd = (text) => R.contains('\n', text) || R.contains('-', text)
  isWordEmpty = (word: TWord) => word.word === '' && word.translate === ''

  composeWord(): TWord {
    const { word, translate } = this.state;
    return { word: R.trim(word), translate: R.trim(translate) };
  }
  addWords(text: string) {
    const words: TWord[] = convertTextToWords(text);
    R.forEach((value: TWord) => {
      this.props.addWord(value);
    })(words);
  }

  render() {
    const { word, translate } = this.state;
    return (
      <form className={classes.form} onSubmit={this.onSubmit}>

        <div className={classes.firstRowContainer}>
          <div className={classes.wordContainer}>
            <WordTextarea onChange={this.onWordChange} value={word} />
          </div>
          <div className={classes.submitContainer} >
            <SendSvg onClick={this.onSubmit} />
          </div>
        </div>

        <div className={classes.secondRowContainer}>
          <TranslateTextarea onChange={this.onTraslateChange} value={translate} />
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
