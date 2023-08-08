/*
toBe source code from jest repo
https://github.com/jestjs/jest/blob/main/packages/expect/src/matchers.ts#L77
 */

toBe(received: unknown, expected: unknown) {
  const matcherName = 'toBe';
  const options: MatcherHintOptions = {
    comment: 'Object.is equality',
    isNot: this.isNot,
    promise: this.promise,
  };

  const pass = Object.is(received, expected);

  const message = pass
    ? () =>
      // eslint-disable-next-line prefer-template
      matcherHint(matcherName, undefined, undefined, options) +
      '\n\n' +
      `Expected: not ${printExpected(expected)}`
    : () => {
      const expectedType = getType(expected);

      let deepEqualityName = null;
      if (expectedType !== 'map' && expectedType !== 'set') {
        // If deep equality passes when referential identity fails,
        // but exclude map and set until review of their equality logic.
        if (
          equals(
            received,
            expected,
            [...this.customTesters, ...toStrictEqualTesters],
            true,
          )
        ) {
          deepEqualityName = 'toStrictEqual';
        } else if (
          equals(received, expected, [
            ...this.customTesters,
            iterableEquality,
          ])
        ) {
          deepEqualityName = 'toEqual';
        }
      }

      return (
        // eslint-disable-next-line prefer-template
        matcherHint(matcherName, undefined, undefined, options) +
        '\n\n' +
        (deepEqualityName !== null
          ? `${DIM_COLOR(
            `If it should pass with deep equality, replace "${matcherName}" with "${deepEqualityName}"`,
          )}\n\n`
          : '') +
        printDiffOrStringify(
          expected,
          received,
          EXPECTED_LABEL,
          RECEIVED_LABEL,
          isExpand(this.expand),
        )
      );
    };

  // Passing the actual and expected objects so that a custom reporter
  // could access them, for example in order to display a custom visual diff,
  // or create a different error message
  return {actual: received, expected, message, name: matcherName, pass};
},
