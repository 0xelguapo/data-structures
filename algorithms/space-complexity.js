// Factorial (loop)
// a new 'i' is created every iteration, so the old ones are not re-used. there is no permanent data in the for loop
// the space complexity here is O(1)

function factorial (num) {
  let result = 1;
  for (let i = 2; i <= num; i++) result = result * i;
  return result
}


// Factorial (Recursion)
// num is stored in memory. 
// with every new function call, we create a new number that needs to be saved in memory, on top of the previous numbers
// Space Complexity: O(n) since we call ourselves n times

function factRecursive(num) {
  if(num === 1) return 1
  return num * factRecursive(num - 1)
}


// Linear Search
// if statements are temporary booleans
// index is only one number stored in memory
// Space Complexity: O(1) as it doesn't depend on n at all

function findElement(arr, element, comparatorFn) {
  let index = 0;
  for (const item of arr) { 
    if(typeof element == 'object' && element !== null && comparatorFn(element, item)) return index
    if(item == element) return index
    index++;
  }
}

// Binary Search
// Space Complexity : O(1) since no new "permenent" values are created during iteration and doesn't depend on length of array (n)
function findElement(sortedArr, element) {
  let startIndex = 0;
  let endIndex = sortedArr.length - 1;

  while (startIndex <= endIndex) {
    const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);

    if (element === sortedArr[middleIndex]) {
      return middleIndex;
    }

    if (sortedArr[middleIndex] < element) {
      startIndex = middleIndex + 1;
    } else {
      endIndex = middleIndex - 1;
    }
  }
}

// bubble sort
// Space Complexity: O(1) 
// we don't create any new "permanent" values 

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

// quick sort
// if check has no impact on space complexity
// we create brand new arrays, however, this is still constant
// however we push a new element into the arrays we derive. an element that survives the loop iteration.
// the arrays grow with every iteration, and elements that are created and kept around after each loop iteration.
// however we shrink by equal amounts using shift(), so we still have constant space complexity
// but we call ourselves twice which creates new values in memory
// Space Complexity: O(n), the bigger our n the more items we create 


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

// merge sort
// We call ourselves with shorter arrays and create a bunch of new arrays in memory
// the longer the array the more new arrays are created
// Space Complexity: O(n)

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



