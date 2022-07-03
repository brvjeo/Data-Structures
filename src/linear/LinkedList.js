const Node = require("./Node.js");

class LinkedList {
  #head = null;
  #tail = null;
  #length = 0;

  *[Symbol.iterator]() {
    let node = this.#head;
    while (node.next) {
      yield node.data;
      node = node.next;
    }
  }

  pull(index) {
    if (index < 0 || index >= this.#length) return;
    let node = this.#getNode(index);
    let data = node.data;

    if (!node.prev && !node.next) {
      this.#tail = this.#head = null;
    } else if (!node.prev) {
      node.next.prev = null;
      this.#head = node.next;
    } else if (!node.next) {
      node.prev.next = null;
      this.#tail = node.prev;
    } else {
      node.prev.next = node.next;
      node.next.prev = node.prev;
    }

    node = null;
    this.#length--;
    return data;
  }

  insert(index, data) {
    if (index < 0 || index > this.#length)
      throw new Error("Index is out of bounds!");

    if (!this.#head) {
      this.#head = this.#tail = new Node(data);
      this.#length++;
      return;
    }

    let node = new Node(data), ptr;
    if (!index) {
      node.next = this.#head;
      this.#head.prev = node;
      this.#head = node;
    } else if (index == this.#length) {
      node.prev = this.#tail;
      this.#tail.next = node;
      this.#tail = node;
    } else {
      ptr = this.#getNode(index);
      ptr.prev.next = node;
      node.next = ptr;
      node.prev = ptr.prev;
      ptr.prev = node;
    }
    this.#length++;
  }

  get(index) {
    return this.#getNode(index)?.data;
  }

  #getNode(index) {
    if (index < 0 || index >= this.#length) return;

    let ptr;
    if (index + 1 > this.#length / 2) {
      ptr = this.#tail;
      for (let i = 0; i < this.#length - index - 1; i++) {
        ptr = ptr.prev;
      }
    } else {
      ptr = this.#head;
      for (let i = 0; i < index; i++) {
        ptr = ptr.next;
      }
    }
    return ptr;
  }

  get length() {
    return this.#length;
  }
}

module.exports = LinkedList;
