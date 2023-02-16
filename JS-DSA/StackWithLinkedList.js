const LinkedList = require("./LinkedListWithTail");

class StackWithLinkedList {
  constructor() {
    this.list = new LinkedList();
  }

  push(value) {
    this.list.prepend(value);
  }
  pop() {
    return this.list.removeFormFront();
  }
  peek() {
    return this.list.head.value;
  }
  isEmpty() {
    return this.list.isEmpty();
  }
  getSize() {
    return this.list.size;
  }
  print() {
    return this.list.print();
  }
}

const stack = new StackWithLinkedList();
console.log(stack.isEmpty());

stack.push(10);
stack.push(20);
stack.push(30);
stack.print();
