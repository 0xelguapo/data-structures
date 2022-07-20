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

function isPrime(num) {
  for(let i = 2; i < Math.sqrt(num); i++) {
    if(num % i === 0) return false
  }
  return true;
}

console.log(isPrime(27277))

function smallestValue(arr) {
  let smallest = arr[0]
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] < arr[i + 1] && arr[i] <= smallest) smallest = arr[i]
  }
  return smallest
}

console.log(smallestValue([3, 5, 9, 12, 18, 2, 92])) // O(n)

function isPowerOfTwo(num) {
  if(num === 1) return true
  if(num % 2 !== 0) return false
  return isPowerOfTwo(num / 2)
}

console.log(isPowerOfTwo(8))
console.log(isPowerOfTwo(12))