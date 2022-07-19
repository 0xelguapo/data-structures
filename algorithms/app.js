function sumNumbers(arrayOfNums) {
  let result = 0;
  for (let i = 0; i < arrayOfNums.length; i++) {
    result += arrayOfNums[i];
  }
  return result;
}

console.log(sumNumbers([1, 3, 10])); // should yield 14

function fibonacci(n) {
  if(n === 0) return 0
  if(n === 1) return 1
  return fibonacci(n - 1) + fibonacci(n - 2)
}

console.log(fibonacci(6))//0, 1, 1, 2, 3, 5, 8