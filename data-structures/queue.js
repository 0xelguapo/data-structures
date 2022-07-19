class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(value) {
    this.items.unshift(value) //adds item to beginning of array
  }

  dequeue() {
    this.items.pop() //removes last item of array
  }

  isEmpty() {
    return this.items.length === 0;
  }

  toArray() {
    return this.items.slice();
  }
}
