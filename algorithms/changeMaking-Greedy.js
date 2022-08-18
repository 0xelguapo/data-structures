// the change making problem - Greedy
// use the least amount of coins to make change for a given amount of money
// 1. Verify the problem: are the coins variable / ordered? Are we allowed to round up?
// 2. Try a greedy approach first. Go through all coins and decide if each should be used

function computeChange(coins, amount) {
  let remainingAmount = amount;

  const calculatedChange = {
    selectedCoins: {},
    numberOfCoins: 0,
  };

  for (const coin of coins) {
    const count = Math.floor(remainingAmount / coin);
    calculatedChange[coin] = count;
    calculatedChange.numberOfCoins += count;
    remainingAmount = remainingAmount - coin * count;
  }
  return calculatedChange
}

const availableCoins = [100, 50, 20, 10, 5, 2, 1];
const targetAmount = 66;

const change = computeChange(availableCoins, targetAmount);
console.log(change);

/* Time Complexity: O(n) 
To achieve log time, we have to split the problem into smaller chunks, and only analyze part. Probably not possible here.
If we assume the coins are set in stone, meaning 
*/
