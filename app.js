import { LinkedList } from "./LinkedList.js";

class Queue {
  constructor() {
    this.list = new LinkedList()
  }

  //new items are always added at the end.
  //compared to Stack, we add to end rather than beginning
  enqueue(value) {
    this.list.append(value);
  }

  //remove the first item 
  dequeue() {
    return this.list.deleteHead()
  }

  isEmpty() {
    return !this.list.head
  }

  toArray() {
    return this.list.toArray()
  }
}