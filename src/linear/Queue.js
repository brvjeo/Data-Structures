const LinkedList = require("./LinkedList.js");

class Queue {
  #list = new LinkedList();

  [Symbol.iterator]() {
    return this.#list[Symbol.iterator]();
  }

  push(data) {
    this.#list.insert(this.length, data);
  }

  shift() {
    if (!this.length) return;
    return this.#list.pull(0);
  }

  includes(data, compare){
    return this.#list.includes(data,compare);
  }

  get(){
    if(!this.length) return;
    return this.#list.atPos(0);
  }

  get length() {
    return this.#list.length;
  }
}

module.exports = Queue;