import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as R from 'ramda';
import _ from 'lodash/fp';
import { AppState } from 'core/reducer';
import { Word } from 'components/Word';
import { TWord } from 'types';
import { AddWord } from 'components/AddWord';
import { ListLayout } from 'components/ListLayout';
import { ListAddWord, ListRemoveWord } from 'core/list/actions';


type OwnProps = {
};
type StateProps = {
  list: TWord[];
};
type DispatchProps = {
  addWord: (word: TWord) => void;
  removeWord: (word: TWord) => void;
};
type Props = StateProps & DispatchProps & OwnProps;

type State = {
};

class ListComponent extends React.PureComponent<Props, State> {
  onRemove = (word: TWord) => {

  }
  render() {
    const { addWord, list, removeWord } = this.props;
    return (
      <ListLayout>
        <h5>Append new word</h5>
        <div>
          <AddWord addWord={addWord} />
        </div>
        <h5>List of words</h5>
        <div>
          {R.pipe(
            R.addIndex(R.map)((word: TWord, index: number) => <Word key={index} word={word} onRemove={removeWord} />)
          )(list)}
        </div>
      </ListLayout>
    );
  }
}
const mapStateToProps = (state: AppState) => ({
  list: state.list.list
});

const mapDispatchToProps = (dispatch: Dispatch<DispatchProps>) => ({
  addWord: (word: TWord) => {
    dispatch(new ListAddWord(word));
  },
  removeWord: (word: TWord) => {
    dispatch(new ListRemoveWord(word));
  },
});

export const List = connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(ListComponent);
