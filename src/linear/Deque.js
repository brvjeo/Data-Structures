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

  getFirst(){
    if(!this.length) return;
    return this.#list.atPos(0);
  }

  getLast(){
    if(!this.length) return;
    return this.#list.atPos(this.length - 1);
  }

  get length() {
    return this.#list.length;
  }
}

module.exports = Deque;
