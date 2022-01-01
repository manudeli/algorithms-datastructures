// function same(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     const correctIndex = arr2.indexOf(arr1[i] ** 2)
//     console.log(correctIndex)
//     if (correctIndex === -1) {
//       return false
//     }
//     console.log(arr2)
//     arr2.splice(correctIndex, 1)
//   }
//   return true
// }

function same(arr1: number[], arr2: number[]) {
  if (arr1.length !== arr2.length) {
    return false
  }
  let frequencyCounter1 = {}
  let frequencyCounter2 = {}
  arr1.forEach((val) => {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
  })
  arr2.forEach((val) => {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
  })
  for (let stringKey in frequencyCounter1) {
    const key = Number(stringKey)
    if (!(key ** 2 in frequencyCounter2)) {
      return false
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false
    }
  }
  return true
}

console.log(same([1, 2, 3, 2], [9, 1, 4, 4]))
