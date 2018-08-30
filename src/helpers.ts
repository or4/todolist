import * as R from 'ramda';

/**
 * A => A => boolean
 */
export const isNotNil = R.complement(R.isNil);

export const notEquals = R.complement(R.equals);

export const notEmpty = R.complement(R.isEmpty);

/**
 * Filters object keys with the predicate
 */
export const filterKeys = (predicate: (key: string) => boolean) =>
  R.pipe<object, any[], any[], object>(
    R.toPairs,
    R.filter(R.pipe(
      R.head,
      predicate,
    )),
    R.fromPairs,
  );

/**
 * Returns true if all keys satisfy the predicate
 *
 * (string -> boolean) -> Object -> boolean
 */
export const allKeysSatisfy = (predicate: (key: string) => boolean) =>
  R.pipe<object, string[], boolean>(
    R.keys,
    R.all(predicate),
  );

/**
 * Returns true if all values satisfy the predicate
 *
 * (string -> boolean) -> Object -> boolean
 */
export const allValuesSatisfy = (predicate: (value: any) => boolean) =>
  R.pipe<object, any[], boolean>(
    R.values,
    R.all(predicate),
  );


/**
 * Call function if it exists
 */
export const callWhenIsNotNil = function(path: string[]) {
  return R.pipe(
    R.path(path),
    R.when(isNotNil, R.nthArg(0)())
  );
};

/**
 * Call function if it exists
 */
export const assocWhenArgIsNotNil = function (propName: string, propValue: any, object: any) {
  if (R.isNil(propValue)) {
    return object;
  }

  return R.assoc(propName, propValue, object);
};


export const joinWithSpace = R.unapply(
  R.pipe(
    R.reject(R.isNil),
    R.join(' ')
  )
);
