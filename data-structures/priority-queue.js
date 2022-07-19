class Node {
  constructor(value, priority) {
    this.value = value;
    this.next = null;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.first = null;
  }

  insert(value, priority) {
    const newNode = new Node(value, priority);

    if (!this.first || priority > this.first.priority) {
      newNode.next = this.first;
      this.first = newNode;
    } else {
      let currentNode = this.first;

      while (currentNode.next && priority < currentNode.next.priority) {
        //walks through linkedlist until there is no next node or until it reaches priority
        currentNode = currentNode.next;
      }
      //currentNode has a higher priority. we set newNode's next to what was currentNode's next
      //
      newNode.next = currentNode.next;
      currentNode.next = newNode;
    }
  }

  process() {
    const first = this.first;
    this.first = this.first.next;
    return first;
  }
}

const queue = new PriorityQueue();
queue.insert("clean up room", 1);
queue.insert("do taxes", 99);
queue.insert("take your money", 105);

console.log(queue);
console.log(queue.process());
console.log(queue.process());
