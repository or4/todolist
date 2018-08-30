import * as R from 'ramda';
import { isNotNil, assocWhenArgIsNotNil } from 'helpers';

const blue = '#4295f0';
const green = '#38bf4f';
const greyCool = '#86939e';
const greyLight = '#e1e8ee';
const greySecond = '#4a4a4a';
const pink = '#d29fe8';
const purple = '#5d44df';
const red = '#d0021b';
const white = '#fff';

const background = `linear-gradient(90deg, ${purple}, ${pink})`;
const shadow = 'rgba(0, 0, 0, 0.25)';
const border = '#d8d9d8';

export const theme = {
  colors: {
    blue,
    green,
    greyCool,
    greyLight,
    greySecond,
    pink,
    purple,
    red,
    white,

    background,
    border,
    shadow,
  },

  fontFamily: {
    regular: 'Ubuntu-Regular',
    light: 'Ubuntu-Light',
    bold: 'Ubuntu-Bold',
    italic: 'Ubuntu-italic',
    medium: 'Ubuntu-Medium',
  },
  fontSize: {
    small: '12px',
    medium: '16px',
    large: '24px',
  },
};


export const lightFont = (color: string, fontSize: string, lineHeight?: string) => {
  const font = {
    color,
    fontFamily: theme.fontFamily.light,
    fontSize,
  };
  return assocWhenArgIsNotNil('lineHeight', lineHeight, font);
};

export const borderBottom = () => ({
  borderTop: '0',
  borderRight: '0',
  borderLeft: '0',
  borderBottom: `1px solid ${theme.colors.border}`,
});

export const borderFull = () => ({
  border: `1px solid ${theme.colors.border}`,
});