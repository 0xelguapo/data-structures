function findElement(arr, element, comparatorFn) {
  let index = 0;
  for (const item of arr) {
    if(typeof element == 'object' && element !== null && comparatorFn(element, item)) return index
    if(item == element) return index
    index++;
  }
}

const arr = [5, 3, 10, -10, 33, 51];

console.log(findElement(arr, 10));

const objects = [
  {name: 'eric', age: 24},
  {name: 'liz', age: 92}
]

console.log(findElement(objects, {name: 'eric', age: 24}, (el, it) => el.name === it.name))

// Time Complexity:
// Best Case: O(1)
// Average: Tends to be O(n)
// Worst Case: O(n)