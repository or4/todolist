import React from 'react';
import { theme } from '../theme';

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

const rawClasses = {
  container: {
    cursor: 'pointer',
    height: '24px',
    marginTop: '-1px',

    '& > svg': {
      fill: theme.colors.greyCool,
      transform: 'rotate(45deg)',
    },
    '&:hover > svg': {
      fill: theme.colors.purple,
    }
  },
};

const { classes } = jss.createStyleSheet(rawClasses).attach();

type Props = {
  onClick?: () => void;
};
type State = {
};

export class CloseSvg extends React.PureComponent<Props, State> {
  render() {
    const { onClick } = this.props;
    return (
      <div className={classes.container} onClick={onClick}>
        <svg
          preserveAspectRatio="none"
          viewBox={'0 0 24 24'}
          height="24"
          width="24"
        >
          <path d="M13,13.5 L13,19.7727273 C13,20.1741818 12.553,20.5 12,20.5 C11.448,20.5 11,20.1741818 11,19.7727273 L11,13.5 L4.72727273,13.5 C4.32581818,13.5 4,13.053 4,12.5 C4,11.948 4.32581818,11.5 4.72727273,11.5 L11,11.5 L11,5.22727273 C11,4.82581818 11.448,4.5 12,4.5 C12.553,4.5 13,4.82581818 13,5.22727273 L13,11.5 L19.2727273,11.5 C19.6741818,11.5 20,11.948 20,12.5 C20,13.053 19.6741818,13.5 19.2727273,13.5 L13,13.5 Z" />
        </svg>
      </div>
    );
  }
}
