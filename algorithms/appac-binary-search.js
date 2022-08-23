// set integers pointing to the high and low range of the possible indices
// while the high and low indices do not overlap...
// find the midpoint between high and low
// compare target value to midpoint value
// if it equals, return the midpoint index
// if its higher than midpoint, move the lower pointer to midpoint + 1
// if its lower, move the higher to midpoint - 1
// return -1 if the loop exits with overlapping pointers

function binarySearch(arr, target) {
  let startIndex = 0;
  let endIndex = arr.length - 1;

  while(endIndex >= startIndex) {
    const midPoint = Math.floor((endIndex - startIndex) / 2) + startIndex;
    
    if(arr[midPoint] === target) return midPoint
    if(arr[midPoint] < target) startIndex = midPoint + 1;
    else endIndex = midPoint - 1;
  }
}

const arr = [1, 5, 9, 13, 99, 120, 150, 190];

console.log(binarySearch(arr, 99));
