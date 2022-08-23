function recursiveSort(arr) {
  if (arr.length <= 1) return arr;

  let maxIndex = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[maxIndex]) maxIndex = i;
  }

  const maxValue = arr[maxIndex];
  arr.splice(maxIndex, 1);

  arr = recursiveSort(arr);

  arr.push(maxValue);
  return arr;
}

console.log(recursiveSort([3, 2, 0, 4, 1]));
