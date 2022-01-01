function search(array: number[], val: number) {
  let min = 0
  let max = array.length - 1

  while (min <= max) {
    let middle = Math.floor((min + max) / 2)
    let currentElement = array[middle]

    if (array[middle] < val) {
      min = middle + 1
    } else if (array[middle] > val) {
      max = middle - 1
    } else {
      return middle
    }
  }

  return -1
}

console.log(
  search(
    [
      1, 2, 3, 4, 5, 6, 6, 7, 8, 9, 9, 10, 11, 123, 23232, 23123234,
      12131323232,
    ],
    11
  )
)
