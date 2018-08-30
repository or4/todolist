import React from 'react';

import jss from 'jss';
import preset from 'jss-preset-default';
import { theme } from '../theme';
jss.setup(preset());

const rawClasses = {
  container: {
    cursor: 'pointer',
    fill: theme.colors.greyCool,

    '&:hover': {
      fill: theme.colors.purple,
    }
  },
};

const { classes } = jss.createStyleSheet(rawClasses).attach();

//<div>

type Props = {
  onClick?: () => void;
};
type State = {
};

export class SendSvg extends React.PureComponent<Props, State> {
  render() {
    const { onClick } = this.props;
    return (
      <svg
        className={classes.container}
        onClick={onClick}
        preserveAspectRatio="none"
        viewBox={'0 0 24 24'}
        height="24"
        width="24"
      >
        <path d="M11.9848235,18.755452 C11.9848235,18.755452 10.2282905,15.3751627 9.73861762,14.266356 L18.7655575,5.72528961 L11.9848235,18.755452 L11.9848235,18.755452 Z M5.24620587,11.4606709 L18.1618896,5.28816388 L9.17706615,13.7052189 C9.17481994,13.7029744 5.24620587,11.4606709 5.24620587,11.4606709 L5.24620587,11.4606709 Z M20.4080955,3.04361587 C19.758942,3.359536 3,11.4606709 3,11.4606709 C3,11.4606709 8.64471536,14.8606 8.61551468,14.827493 C8.60596831,14.8168314 11.9848235,21 11.9848235,21 C11.9848235,21 20.8292591,3.88532137 20.969647,3.60475287 C21.0926268,3.25404224 20.8292591,2.86854112 20.4080955,3.04361587 L20.4080955,3.04361587 Z" id="path-1" />
      </svg>
    );
  }
}
