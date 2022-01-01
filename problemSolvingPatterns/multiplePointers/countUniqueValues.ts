// function countUniqueValues(arr: number[]) {
//   let left = 0
//   let right = arr.length - 1

//   const counter = {}
//   while (left <= right) {
//     if (counter[arr[left]]) {
//       left += 1
//     } else {
//       counter[arr[left]] = 1
//     }
//   }
//   return Object.keys(counter).length
// }

function countUniqueValues(arr: number[]) {
  let left = 0
  let right = left + 1

  if (!arr.length) {
    return 0
  }

  while (right < arr.length) {
    if (arr[left] === arr[right]) {
      right += 1
    } else if (arr[left] !== arr[right]) {
      left += 1
      arr[left] = arr[right]
    }
  }

  return left + 1
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 1, 2]))
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]))
console.log(countUniqueValues([]))
console.log(countUniqueValues([-2, -1, -1, 0, 1]))
