const getLongestSequence = require('./getLongestSequence');

describe('getLongestSequence', () => {
  test('returns correct start, finish, and subsequence for a given array', () => {
    const array = [1, 2, 3, 2, 3, 44, 1];
    expect(getLongestSequence(array)).toEqual({
      startAt: 0,
      finishAt: 2,
      subsequence: [1, 2, 3]
    });
  });

  test('returns the first longest subsequence', () => {
    const array = [1, 2, 2, 33, 33, 4];
    expect(getLongestSequence(array)).toEqual({
      startAt: 0,
      finishAt: 1,
      subsequence: [1, 2]
    });
  });

  test('returns an empty subsequence for an empty array', () => {
    expect(getLongestSequence([])).toEqual({
      startAt: -1,
      finishAt: -1,
      subsequence: []
    });
  });

  test('returns a first single element subsequence (no increasing sequence)', () => {
    const array = [5, 4, 3, 2, 1];
    expect(getLongestSequence(array)).toEqual({
      startAt: 0,
      finishAt: 0,
      subsequence: [5]
    });
  });

  test('returns the entire array', () => {
    const array = [1, 20, 30, 40, 50];
    expect(getLongestSequence(array)).toEqual({
      startAt: 0,
      finishAt: 4,
      subsequence: [1, 20, 30, 40, 50]
    });
  });

  test('arrays with negative numbers', () => {
    const array = [-3, -2, -1, 0];
    expect(getLongestSequence(array)).toEqual({
      startAt: 0,
      finishAt: 3,
      subsequence: [-3, -2, -1, 0]
    });
  });
});
