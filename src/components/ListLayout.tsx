import React from 'react';
import { theme } from 'ui/theme';

import jss from 'jss';
import preset from 'jss-preset-default';
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
    background: theme.colors.white,
    boxShadow: '0 4px 24px 0 rgba(0, 0, 0, 0.25)',
    borderRadius: '4px',
    minHeight: '545px',
    margin: '50px auto',
    position: 'relative' as 'relative',
    width: '540px',
  },
  subContainer2: {
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
          <div className={classes.subContainer2}>
            {children}
          </div>
        </div>
      </div>
    );
  }
}
