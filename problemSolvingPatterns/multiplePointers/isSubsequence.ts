/*
다음 조건에 맞는 isSubsequence 함수를 작성하시오
- 두개의 string을 인자로 받습니다.
- 첫번째 인자의 string글자들이 두번째 string글자들의 포함관계인지 알아내는 함수입니다.
- 함수는 첫번째 string의 글자들이 순서가 바뀌지 않고 두번째 string안에 있는지를 체크합니다.
*/

function isSubsequence(string1: string, string2: string): boolean {
  if (string1 === string2) return true
  if (string1.length > string2.length) return false

  let first = 0
  let second = 0

  while (first < string1.length) {
    if (string1[first] === string2[second]) {
      first += 1
      second += 1
    } else {
      second += 1
    }

    if (second > string2.length) {
      return false
    }
  }

  return true
}

console.log(isSubsequence('hello', 'hello'))
console.log(isSubsequence('hello', 'hello world'))
console.log(isSubsequence('sing', 'sting'))
console.log(isSubsequence('abc', 'abracadabra'))
console.log(isSubsequence('abc', 'acb'))

function isSubsequence2(string1: string, string2: string): boolean {
  const subChars = string1.split('')
  const inheritedChars = string2.split('')

  let sub = 0
  let inherited = 0
  while (inherited < inheritedChars.length) {
    if (sub === subChars.length) {
      return true
    } else if (subChars[sub] === inheritedChars[inherited]) {
      sub++
    } else if (subChars[sub] !== inheritedChars[inherited]) {
      inherited++
    }
  }
  return false
}

console.log(isSubsequence2('hello', 'hello'))
console.log(isSubsequence2('hello', 'hello world'))
console.log(isSubsequence2('sing', 'sting'))
console.log(isSubsequence2('abc', 'abracadabra'))
console.log(isSubsequence2('abc', 'acb'))
