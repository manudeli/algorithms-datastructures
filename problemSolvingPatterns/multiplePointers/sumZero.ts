function sumZero(arr: number[]) {
  let start = 0
  let end = arr.length - 1

  while (start < end) {
    const sum = arr[start] + arr[end]
    if (sum === 0) {
      return [arr[start], arr[end]]
    }
    if (sum < 0) {
      start += 1
    } else {
      end -= 1
    }
  }
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]))
console.log(sumZero([-3, -2, -1, 0, 1, 2]))
console.log(sumZero([-2, -1, 0, 1, 3]))
console.log(sumZero([1, 2, 3]))
