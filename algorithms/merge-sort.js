// merge sort: split the array multiple times until we have only 2-element arrays left.
// we then sort these arrays and merge them back together

function sort(arr) {
  if (arr.length < 2) return arr;

  if (arr.length === 2) {
    return arr[0] > arr[1] ? [arr[1], arr[0]] : arr;
  }

  const middle = Math.floor(arr.length / 2);
  const leftArray = arr.slice(0, middle);
  const rightArray = arr.slice(middle);

  const leftSortedArray = sort(leftArray);
  const rightSortedArray = sort(rightArray);

  let mergedArr = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (
    leftIndex < leftSortedArray.length ||
    rightIndex < rightSortedArray.length
  ) {
    // the left array will always be shorter than the right if uneven
    // if the left array is exhausted, there has to be an item in the right array still
    if (
      leftIndex >= leftSortedArray.length ||
      leftSortedArray[leftIndex] > rightSortedArray[rightIndex]
    ) {
      mergedArr.push(rightSortedArray[rightIndex]);
      rightIndex++;
    } else {
      mergedArr.push(leftSortedArray[leftIndex]);
      leftIndex++;
    }
  }
  return mergedArr
}

const sortedArray = sort([-10, 33, 5, 10, 3, 9, -19, -99, 100]);
console.log(sortedArray);
