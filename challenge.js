function getSquares (arr) {
  const squares = []
  for (let i = 0; i < arr.length; i += 1) {
    squares.push(arr[i] * arr[i])
  }

  return squares
}

const collectionUtils = {
  getSquares
}

module.exports = collectionUtils
