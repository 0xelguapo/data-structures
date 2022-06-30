class Stack {
  constructor() {
    this.items = [];
  }

  push(value) {
    this.items.push(value);
  }

  pop() {
    return this.items.pop(); //remove top item. We call return to get the item that's popped off
  }

  isEmpty() {
    return this.items.length === 0; //return true if its empty
  }

  toArray() {
    return this.items.slice() //return copy of array 
  }
}

const stack = new Stack();
stack.push('cook dinner!')
stack.push('wash the dishes!')
stack.push('buy ingredients!')

console.log(stack.toArray());
stack.pop();
console.log(stack.toArray())
