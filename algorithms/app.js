function sumNumbers(arrayOfNums) {
  let result = 0;
  for (let i = 0; i < arrayOfNums.length; i++) {
    result += arrayOfNums[i];
  }
  return result;
}

console.log(sumNumbers([1, 3, 10])); // should yield 14

function fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Time Complexity (O(2^n))
// two new function calls for every function call.
console.log(fibonacci(6)); //0, 1, 1, 2, 3, 5, 8

function isPrime(num) {
  for (let i = 2; i < Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

console.log(isPrime(27277));

function smallestValue(arr) {
  let smallest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i + 1] && arr[i] <= smallest) smallest = arr[i];
  }
  return smallest;
}

console.log(smallestValue([3, 5, 9, 12, 18, 2, 92])); // O(n)

function isPowerOfTwo(num) {
  if (num === 1) return true;
  if (num % 2 !== 0) return false;
  return isPowerOfTwo(num / 2);
}

//Time Complexity (O(log(n)))
console.log(isPowerOfTwo(8));
console.log(isPowerOfTwo(12));

function isPowerOfTwoBitwise(num) {
  if (num < 1) return false;
  return number & (number - 1 === 0);
}

function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

console.log(factorial(5));

//recursion with memoization
//avoid unnecessary recursive steps by storing data
//intermediate results are stored and re-used
//create a storage for each function

let counter = 0;

function fib(n, memo) {
  let result;
  counter++;
  if (memo[n]) return memo[n];
  if (n === 1 || n === 2) result = 1;
  else result = fib(n - 1, memo) + fib(n - 2, memo);
  memo[n] = result;
  return result;
}

console.log(fib(11, {}));
console.log('counter',counter)
