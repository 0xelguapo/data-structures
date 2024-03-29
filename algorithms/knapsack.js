// knapsack problem
// go through all items and possible scenarios

function knapsack(items, cap, itemIndex) {
  // start by looking at just one item.

  if (cap === 0 || itemIndex < 0) {
    return { items: [], value: 0, weight: 0 };
  }

  if (cap < items[itemIndex].weight) {
    return knapsack(items, cap, itemIndex - 1);
  }

  // consider the fact that we just added an item, so we have to reduce the capacity
  const sackWithItem = knapsack(
    items,
    cap - items[itemIndex].weight,
    itemIndex - 1
  );

  const sackWithoutItem = knapsack(items, cap, itemIndex - 1);

  const valueWithItem = sackWithItem.value + items[itemIndex].value;
  const valueWithoutItem = sackWithoutItem.value;

  if (valueWithItem > valueWithoutItem) {
    const updatedSack = {
      items: sackWithItem.items.concat(items[itemIndex]),
      value: sackWithItem.value + items[itemIndex].value,
      weight: sackWithItem.weight + items[itemIndex].weight,
    };
    return updatedSack;
  } else return sackWithoutItem;
}

const items = [
  { name: "a", value: 3, weight: 3 },
  { name: "b", value: 6, weight: 5 },
  { name: "c", value: 10, weight: 3 },
];

const maxCap = 8;

const sack = knapsack(items, maxCap, items.length - 1);
console.log(sack);
