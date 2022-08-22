// permutations (with and without repetition)
// permutations are an ordered combination of values
// without repitition: todo list of items. each task is only done once
// with repetition: a safe combination you want to set such as [1, 1, 9], [1, 1, 1], [9, 5, 9]. we care about the order of the values since they give different solutions.

//here is permutation without reptition

function getPermutations(arr) {
  const permutations = [];

  if (arr.length === 1) return [arr];

  const partialPermutations = getPermutations(arr.slice(1));
  // eventually will be just [['order food']]
  console.log("pPerms", partialPermutations);
  const firstOption = arr[0];
  //'buy groceries'
  console.log("firstOption", firstOption);

  for (let i = 0; i < partialPermutations.length; i++) {
    const partialPermutation = partialPermutations[i];
    console.log("partialPermutation", partialPermutation);

    for (let j = 0; j <= partialPermutation.length; j++) {
      const permutationInFront = partialPermutation.slice(0, j);
      const permutationAfter = partialPermutation.slice(j);
      console.log("inFront", permutationInFront);
      console.log("After", permutationAfter);
      permutations.push(
        permutationInFront.concat([firstOption], permutationAfter)
      );
    }
  }

  return permutations;
}

const todoListItems = ["clean the toilet", "buy groceries", "order food"];
console.log(getPermutations(todoListItems));
