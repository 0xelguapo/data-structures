// create a LinkedList blueprint so we can create as many as we want later
export class LinkedList {
  constructor() {
    // the first step when a linkedList is created
    this.head = null; //1st element
    this.tail = null; //2nd element
  }
  append(value) {
    // each node knows about the next. So we need to store a pointer
    const newNode = { value: value, next: null };

    // store the previous last property to point at new one
    if (this.tail) this.tail.next = newNode;
    this.tail = newNode;
    // if there's no head, set this to the new node as well
    if (!this.head) this.head = newNode;
  }

  prepend(value) {
    const newNode = { value: value, next: this.head };
    this.head = newNode;
    if (!this.tail) this.tail = newNode;
  }

  find(value) {
    if (!this.head) return;

    let curNode = this.head;
    while (curNode) {
      if (curNode.value === value) return curNode;
      curNode = curNode.next;
    }

    return null;
  }

  // takes a value and the value before the new one
  insertAfter(value, afterValue) {
    //find the existing value
    const existingNode = this.find(afterValue);

    if (existingNode) {
      // new node will have a next value of the existingNode's next
      const newNode = { value: value, next: existingNode.next };
      //set the existingNode to have a next value of the new node
      existingNode.next =  newNode;
    }
  }

  delete(value) {
    // if empty do nothing
    if (!this.head) return null;

    while (this.head && this.head.value === value) {
      this.head = this.head.next;
    }
    let curNode = this.head;

    //to delete, you're removing one object and setting the previous object 'next' to point at the one after the deleted
    while (curNode.next) {
      if (curNode.next.value === value) curNode.next = curNode.next.next;
      else curNode = curNode.next; //move onto the next node in while loop
    }

    if (this.tail.value === value) this.tail = curNode;
  }

  deleteHead() {
    if(!this.head) return null;

    const deletedItem = this.head;

    if(this.head.next) this.head = this.head.next;
    
    else {
      this.head = null;
      this.tail = null
    }
    return deletedItem
  }

  // a  way to look at all the elements
  toArray() {
    const elements = [];

    let curNode = this.head;
    while (curNode) {
      elements.push(curNode);
      curNode = curNode.next;
    }
    return elements;
  }
}

// const linkedList1 = new LinkedList();
// linkedList1.append("first value 0");
// linkedList1.append(1);
// linkedList1.append("Darkness");
// linkedList1.append("visual studio");
// linkedList1.prepend(121);

// linkedList1.delete("first value 0");

// console.log(linkedList1.toArray());
// console.log(linkedList1.find(1));

// linkedList1.insertAfter("Stupid Man", "Darkness")
// console.log(linkedList1.toArray())