import React from 'react';

import jss from 'jss';
import preset from 'jss-preset-default';
import { theme } from 'ui/theme';
jss.setup(preset());

const rawClasses = {
  container: {
    alignItems: 'center',
    background: theme.colors.background,
    display: 'flex',
    flexDirection: 'column' as 'column',
    height: 'calc(100vh)',
    justifyContent: 'top',
    padding: '0'
  },
  subContainer: {
    background: 'white',
    borderRadius: '8px',
    marginTop: '50px',
    padding: '50px',
  }
};

const { classes } = jss.createStyleSheet(rawClasses).attach();

type Props = {
};
type State = {
};

export class ListLayout extends React.PureComponent<Props, State> {
  render() {
    const { children } = this.props;
    return (
      <div className={classes.container}>
        <div className={classes.subContainer}>
          {children}
        </div>
      </div>
    );
  }
}
