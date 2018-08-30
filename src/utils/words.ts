import * as R from 'ramda';
import { TWord } from 'types';

export const convertTextToWords = R.pipe<string, string[], TWord[]>(
  R.split('\n'),
  R.map(R.pipe<string, string[], string[], TWord>(
    R.split('-'),
    R.map(R.trim),
    wordArr => ({ word: wordArr[0], translate: wordArr[1] })
  )),
);
