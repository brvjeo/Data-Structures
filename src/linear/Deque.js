const LinkedList = require("./LinkedList.js");

class Deque {
  #list = new LinkedList();

  [Symbol.iterator]() {
    return this.#list[Symbol.iterator]();
  }

  pop() {
    if (!this.length) return;
    return this.#list.pull(this.length - 1);
  }

  push(data) {
    this.#list.insert(this.length, data);
  }

  unshift() {
    this.#list.insert(0, data);
  }

  shift() {
    if (!this.length) return;
    return this.#list.pull(0);
  }

  get length() {
    return this.#list.length;
  }
}
