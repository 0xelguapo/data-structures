class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.heapElements = [];
  }

  insert(value, priority) {
    const newNode = new Node(value, priority);
    this.heapElements.push(newNode);
    let currentElementIndex = this.heapElements.length - 1;
    let parentElementIndex = Math.floor((currentElementIndex + 1) / 2) - 1;

    //for a max heap. we run this as long as the new element being added is larger than the parent element (as it must be smaller)
    //we swap the elements
    //we guarantee that the biggest element is at the top of the heap
    while (
      parentElementIndex >= 0 &&
      this.heapElements[currentElementIndex].priority >
        this.heapElements[parentElementIndex].priority
    ) {
      const parentElement = this.heapElements[parentElementIndex];
      this.heapElements[parentElementIndex] = newNode;
      this.heapElements[currentElementIndex] = parentElement;
      currentElementIndex = parentElementIndex;
      parentElementIndex = Math.floor((currentElementIndex + 1) / 2) - 1;
    }
  }

  //remove the biggest value and put in the next biggest value at the top
  process() {
    if (this.heapElements.length === 0) return null;
    if (this.heapElements.length === 1) return this.heapElements.pop();

    const topElement = this.heapElements[0];

    this.heapElements[0] = this.heapElements.pop();

    let currentElementIndex = 0;
    let leftChildIndex = 2 * currentElementIndex + 1;
    let rightChildIndex = 2 * currentElementIndex + 2;
    //we take a random node (in this case the last one) and start comparing it to it's child nodes
    //we use the bigger childNode as the new topNode until we find no more bigger values or the array is empty
    let childElementIndex =
      this.heapElements[rightChildIndex] &&
      this.heapElements[rightChildIndex].priority >= this.heapElements[leftChildIndex].priority
        ? rightChildIndex
        : leftChildIndex;

    while (
      this.heapElements[childElementIndex] &&
      this.heapElements[currentElementIndex].priority <=
        this.heapElements[childElementIndex].priority
    ) {
      const currentNode = this.heapElements[currentElementIndex];
      const currentChildNode = this.heapElements[childElementIndex];
      this.heapElements[childElementIndex] = currentNode;
      this.heapElements[currentElementIndex] = currentChildNode;
    }
    return topElement;
  }
}

const heap = new PriorityQueue()

heap.insert('clean up', 1)
heap.insert('taxes', 99)
heap.insert('feed dog', 100)
 
console.log(heap.process())
console.log(heap)