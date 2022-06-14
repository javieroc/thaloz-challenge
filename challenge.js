function getSquares (arr) {
  const squares = []
  for (let i = 0; i < arr.length; i += 1) {
    squares.push(arr[i] * arr[i])
  }

  return squares
}

function getSorted (arr) {
  let aux = null
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = i + 1; j < arr.length; j += 1) {
      if (arr[i] > arr[j]) {
        aux = arr[j]
        arr[j] = arr[i]
        arr[i] = aux
      }
    }
  }
  return arr
}

function getSquaresSorted (arr) {
  const squares = getSquares(arr)
  const sorted = getSorted(squares)
  console.log(
    `input array: ${JSON.stringify(arr)} / output array: ${JSON.stringify(sorted)}`
  )
  return sorted
}

const collectionUtils = {
  getSquares,
  getSorted,
  getSquaresSorted
}

module.exports = collectionUtils
