// knapsack problem improved
// go through all items and possible scenarios

function knapsackFn(items, cap, itemIndex, memo) {
  // start by looking at just one item.

  if (memo[cap][itemIndex]) {
    return memo[cap][itemIndex];
  }

  if (cap === 0 || itemIndex < 0) {
    return { items: [], value: 0, weight: 0 };
  }

  if (cap < items[itemIndex].weight) {
    return knapsack(items, cap, itemIndex - 1, memo);
  }

  // consider the fact that we just added an item, so we have to reduce the capacity
  const sackWithItem = knapsack(
    items,
    cap - items[itemIndex].weight,
    itemIndex - 1,
    memo
  );

  const sackWithoutItem = knapsack(items, cap, itemIndex - 1, memo);

  const valueWithItem = sackWithItem.value + items[itemIndex].value;
  const valueWithoutItem = sackWithoutItem.value;

  let resultSack;

  if (valueWithItem > valueWithoutItem) {
    const updatedSack = {
      items: sackWithItem.items.concat(items[itemIndex]),
      value: sackWithItem.value + items[itemIndex].value,
      weight: sackWithItem.weight + items[itemIndex].weight,
    };
    resultSack = updatedSack;
  } else resultSack = sackWithoutItem;

  memo[cap][itemIndex] = resultSack;
  return resultSack;
}

function knapsack(items, cap, index) {
  const mem = Array.from(Array(cap + 1), () =>
    Array(items.length).fill(undefined)
  );

  return knapsackFn(items, cap, index, mem);
}

const items = [
  { name: "a", value: 3, weight: 3 },
  { name: "b", value: 6, weight: 8 },
  { name: "c", value: 10, weight: 3 },
];

const maxCap = 8;

const sack = knapsack(items, maxCap, items.length - 1);
console.log(sack);
