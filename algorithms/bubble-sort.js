// bubble sort: compare two items at a time and short them.
// Go through the entire array multiple times until all pairs were compared and sorted

function sort(arr) {
  const resultArray = [...arr];

  for (let o = 0; o < resultArray.length; o++) {
    let outerEl = resultArray[o];

    for (let i = o + 1; i < resultArray.length; i++) {
      let innerEl = resultArray[i];

      if (outerEl > innerEl) {
        resultArray[o] = innerEl;
        resultArray[i] = outerEl;

        outerEl = resultArray[o];
        innerEl = resultArray[i];
      }
    }
  }
  return resultArray;
}

const sortedArray = sort([5, 10, -3, -10, 1, 100, 99]);
console.log(sortedArray);
