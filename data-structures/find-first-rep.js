const word = 'academind';

function findFirstRep(str) {
  for(let i = 0; i < str.length; i++) {
    for(let j = i + 1; j < str.length; j++) {
      if(str[i] === str[j]) return str[i];
    }
  }
}

console.log(findFirstRep(word))

function findFirstRep2(str) {
  const table = {};
  for(const char of str) {
    if(table[char]) return char
    table[char] = 1
  }
}

console.log(findFirstRep2(word))