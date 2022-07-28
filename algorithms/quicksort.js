// quicksort: use pivot elements to split array into smaller chunks - elements bigger, smaller, and equal than the pivot element
// repeat that process for all chunks and concat the sorted chunks
// take an element, for instance the first element since it's not sorted
// then you have three 'chunks'. anything smaller than the pivot element is in the smaller chunk. equal chunk. then larger numbers go in larger chunk.
// then you choose a new pivot element
// then concat all the arrays together

function sort(arr) {
  const copiedArray = [...arr];

  if (copiedArray.length <= 1) return copiedArray;

  const smallerElementsArray = [];
  const biggerElementsArray = [];
  const pivotElement = copiedArray.shift();
  const equalElementsArray = [pivotElement];

  while (copiedArray.length) {
    const currentElement = copiedArray.shift();
    if (currentElement === pivotElement)
      equalElementsArray.push(currentElement);
    else if (currentElement < pivotElement)
      smallerElementsArray.push(currentElement);
    else biggerElementsArray.push(currentElement);
  }

  const smallerElementsSortedArray = sort(smallerElementsArray);
  const biggerElementsSortedArray = sort(biggerElementsArray);

  return smallerElementsSortedArray.concat(
    equalElementsArray,
    biggerElementsSortedArray
  );
}

const sortedArray = sort([-3, 10, 1, 100, -10, 22, 15]);
console.log(sortedArray);
