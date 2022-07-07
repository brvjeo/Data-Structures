const LinkedList = require("./LinkedList.js");

class Queue {
  #list = new LinkedList();

  [Symbol.iterator]() {
    return this.#list[Symbol.iterator]();
  }

  enqueue(data) {
    this.#list.insert(this.length, data);
  }

  dequeue() {
    if(this.isEmpty()) return;
    return this.#list.pull(0);
  }

  peek(){
    if(this.isEmpty()) return;
    return this.#list.get(0);
  }

  isEmpty(){
    return this.#list.isEmpty();
  }

  get length() {
    return this.#list.length;
  }
}

module.exports = Queue;