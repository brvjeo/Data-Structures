const LinkedList = require('./LinkedList.js');

class Deque {
  #list = new LinkedList();

  [Symbol.iterator]() {
    return this.#list[Symbol.iterator]();
  }

  pop() {
    if (this.isEmpty()) return;
    return this.#list.pull(this.length - 1);
  }

  push(data) {
    this.#list.insert(this.length, data);
  }

  unshift() {
    this.#list.insert(0, data);
  }

  shift() {
    if (this.isEmpty()) return;
    return this.#list.pull(0);
  }

  get first(){
    if(this.isEmpty()) return;
    return this.#list.get(0);
  }

  get last(){
    if(this.isEmpty()) return;
    return this.#list.get(this.length - 1);
  }

  isEmpty(){
    return this.#list.isEmpty();
  }

  get length() {
    return this.#list.length;
  }
}

module.exports = Deque;