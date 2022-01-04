/*
averagePair라는 함수를 작성해주세요.
정렬된 배열과 타겟 평균을 줍니다.
이 배열에 타겟 평균과 같은 숫자 두 개가 있는 지 여부를 구합니다.
배열에는 적합한 숫자 쌍이 한 개보다 더 많을 수 있습니다.
*/

function averagePair(array: number[], targetAverage: number) {
  if (array.length < 2) {
    return false
  }

  let left = 0
  let right = left + 1

  while (right < array.length) {
    if (right === left) {
      left = 0
      right += 1
    }

    if (array[right] <= targetAverage) {
      right += 1
    } else {
      left += 1
    }

    const average = (array[left] + array[right]) / 2

    if (average === targetAverage) {
      return true
    }
  }
  return false
}

console.log(averagePair([1, 2, 3], 2.5))
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8))
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1))
console.log(averagePair([], 4))

function averagePair2(array: number[], targetAverage: number) {
  let start = 0
  let end = array.length - 1

  while (start < end) {
    if ((array[start] + array[end]) / 2 === targetAverage) {
      return true
    } else if ((array[start] + array[end]) / 2 < targetAverage) {
      start++
    } else if ((array[start] + array[end]) / 2 > targetAverage) {
      end--
    }
  }

  return false
}

console.log(averagePair2([1, 2, 3], 2.5))
console.log(averagePair2([1, 3, 3, 5, 6, 7, 10, 12, 19], 8))
console.log(averagePair2([-1, 0, 3, 4, 5, 6], 4.1))
console.log(averagePair2([], 4))
