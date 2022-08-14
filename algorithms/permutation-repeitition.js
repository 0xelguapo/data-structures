// permutations with repetitions
// split into smaller problems. derive combinations of length 1 and combine with extra digits to derive possible 2 element combinations
// start with simple arrays and add more combinations

function getPermutations(options, length) {
  const permutations = [];

  if (length === 1) return options.map((option) => [option]);

  const partialPermutations = getPermutations(options, length - 1);
  // [[1], [2], [3]] - most deeply nested function call
  // combine these length of 1 arrays with all other options

  for (const option of options) {
    for (const existingPermutation of partialPermutations) {
      permutations.push([option].concat(existingPermutation));
    }
  }

  return permutations;
}

const digits = [1, 2, 3];
const resultLength = 3;

console.log(getPermutations(digits, resultLength));
