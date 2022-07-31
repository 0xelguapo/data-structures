// The Cartesian Product Algorithm

function cartProduct(setA, setB) {
  const products = [];
  for (let setAEl of setA) {
    if (!Array.isArray(setAEl)) {
      setAEl = [setAEl];
    }
    for (const setBEl of setB) {
      products.push([...setAEl, setBEl]);
    }
  }
  return products;
}

const colors = ["blue", "red"];
const sizes = ["m", "l"];
const types = ["rounded", "v-neck"];
// console.log(cartProduct(colors, sizes));

function cartesian(...sets) {
  let tempProduct = sets[0];

  for (let i = 1; i < sets.length; i++) {
    tempProduct = cartProduct(tempProduct, sets[i]);
  }

  return tempProduct;
}

console.log(cartesian(colors, sizes, types));
