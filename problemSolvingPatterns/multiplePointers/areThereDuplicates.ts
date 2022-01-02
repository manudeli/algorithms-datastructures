/*
많은 개수의 인자를 받는 areThereDuplicates 함수를 작성하세요
이 함수는 받은 인자들 중에 중복이 있는지 여부를 체크합니다.

frequencyCounter패턴 혹은 multiple pointers패턴을 활용하여 풀 수 있습니다.
*/

function areThereDuplicates(...args: (number | string)[]): boolean {
  const isNumberArgs = args.reduce((_, cur) => typeof cur === 'number', false)

  if (isNumberArgs) {
    ;(args as number[]).sort((a, b) => a - b)
  } else {
    ;(args as string[]).sort()
  }

  let left = 0
  let right = left + 1

  while (right < args.length) {
    if (args[left] === args[right]) {
      right += 1
    } else {
      left += 1
      args[left] = args[right]
    }
  }

  return args.length !== args.splice(0, left + 1).length
}
console.log(areThereDuplicates(1, 2, 12, 3))
console.log(areThereDuplicates(1, 2, 2))
console.log(areThereDuplicates('a', 'b', 'c', 'a'))
