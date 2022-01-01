function validateAnagram(first: string, second: string) {
  if (first.length !== second.length) {
    return false
  }

  const frequencyCounter = {}

  first.split('').forEach((char1) => {
    frequencyCounter[char1] = (frequencyCounter[char1] || 0) + 1
  })

  second.split('').forEach((char2) => {
    if (!frequencyCounter[char2]) {
      return false
    } else {
      frequencyCounter[char2] -= 1
    }
  })

  return true
}

console.log(validateAnagram('aaz', 'za'))
console.log(validateAnagram('aaz', 'azz'))
console.log(validateAnagram('anagram', 'nagaram'))
console.log(validateAnagram('qwerty', 'qeywrt'))
