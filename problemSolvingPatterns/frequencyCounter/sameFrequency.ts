/*
두개의 양의 정수를 인자로 받게 됩니다.
두 양의 정수의 자릿수마다 같은 횟수로 자릿수를 가지고 있는지 구해주세요
O(N)의 시간복잡도를 가지게 해주세요
*/

function sameFrequency(first: number, second: number): boolean {
  const stringifiedFirst = first.toString()
  const stringifiedSecond = second.toString()

  if (stringifiedFirst.length !== stringifiedSecond.length) {
    return false
  }

  const frequencyCounterFirst = {}
  const frequencyCounterSecond = {}

  stringifiedFirst.split('').forEach((char) => {
    frequencyCounterFirst[char] = (frequencyCounterFirst[char] || 0) + 1
  })

  stringifiedSecond.split('').forEach((char) => {
    frequencyCounterSecond[char] = (frequencyCounterSecond[char] || 0) + 1
  })

  for (let key in frequencyCounterFirst) {
    if (frequencyCounterFirst[key] !== frequencyCounterSecond[key]) {
      return false
    }
  }

  return true
}

console.log(sameFrequency(182, 281))
console.log(sameFrequency(34, 14))
console.log(sameFrequency(3589578, 5879385))
console.log(sameFrequency(22, 222))
