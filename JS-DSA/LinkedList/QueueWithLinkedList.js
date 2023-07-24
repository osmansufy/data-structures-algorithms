const LinkedList = require("./LinkedListWithTail");

class QueueWithLinkedList {
  constructor() {
    this.list = new LinkedList();
  }

  enqueue(value) {
    this.list.append(value);
  }
  dequeue() {
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

const queue = new QueueWithLinkedList();
console.log(queue.isEmpty());

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.print();
queue.dequeue();
queue.print();
console.log(queue.peek());
