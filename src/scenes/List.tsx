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

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

const rawClasses = {
  container: {
  }
};

const { classes } = jss.createStyleSheet(rawClasses).attach();

type OwnProps = {
};
type StateProps = {
  list: TWord[];
};
type DispatchProps = {
};
type Props = StateProps & DispatchProps & OwnProps;

type State = {
};

class ListComponent extends React.PureComponent<Props, State> {
  render() {
    const { list } = this.props;
    return (
      <ListLayout>
        <h5>Append new word</h5>
        <div>
          <AddWord />
        </div>
        <h5>List of words</h5>
        <div>
          {R.pipe(
            R.addIndex(R.map)((word: TWord, index: number) => <Word key={index} word={word} />)
          )(list)}
        </div>
      </ListLayout>
    );
  }
}
const mapStateToProps = (state: AppState) => ({
  // list: R.map((num: number) => ({ word: String(num), translate: `number is ${num}` }), _.range(1, 9))
  list: state.list.list
});

const mapDispatchToProps = (dispatch: Dispatch<DispatchProps>) => {
  return {

  };
};
export const List = connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(ListComponent);
