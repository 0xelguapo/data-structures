function getPermutations(array) {
  // more optimal solution than #1. We swap in place here.
  // create a helper method that takes index i, array of numbers, and permutations
  // helper(i, arr, perms)
  // if i is last position, then we perms.append(copy of array)
  // if i is not in the last position, then for every index j, from i to end of array, swap (i, j)
  // call helper, and then swap them back
  const permutations = [];
  permutationsHelper(0, array, permutations);
  return permutations
}

function permutationsHelper(i, array, permutations) {
  if(i === array.length - 1) {
    console.log(array.slice())
    permutations.push(array.slice());
  } else {
    for(let j = i; j < array.length; j++) {
      console.log(i, j)
      swap(i, j, array);
      permutationsHelper(i + 1, array, permutations);
      swap(i, j, array)
    }
  }
}

function swap(i, j, array) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp 
}

// Do not edit the line below.
console.log(getPermutations([1, 2, 3]))
