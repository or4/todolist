import * as R from 'ramda';

export const isNotNil = R.complement(R.isNil);

export const callWhenIsNotNil = function(path: string[], object: object) {
  return R.pipe(
    R.path(path),
    R.when(isNotNil, R.nthArg(0)())
  )(object);
};
