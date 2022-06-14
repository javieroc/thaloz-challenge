const { getSquares } = require('./challenge')

describe('sorted squared array', () => {
  test('test case 1', () => {
    const testCase1 = { array: [1, 2, 3, 5, 6, 8, 9] }

    const expected = [1, 4, 9, 25, 36, 64, 81]
    expect(getSquares(testCase1.array)).toEqual(expect.arrayContaining(expected))
  })

  test('test case 2', () => {
    const testCase2 = { array: [-2, -1] }

    const expected = [1, 4]
    expect(getSquares(testCase2.array)).toEqual(expect.arrayContaining(expected))
  })

  test('test case 3', () => {
    const testCase3 = { array: [-10, -5, 0, 5, 10] }

    const expected = [0, 25, 25, 100, 100]
    expect(getSquares(testCase3.array)).toEqual(expect.arrayContaining(expected))
  })
})
