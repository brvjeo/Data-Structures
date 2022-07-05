const Node = require("./Node.js");

class LinkedList {
  #head = null;
  #tail = null;
  #length = 0;

  *[Symbol.iterator]() {
    let node = this.#head;
    while (node) {
      yield node.data;
      node = node.next;
    }
  }

  clear(){
    this.#head = null;
    this.#tail = null;
    this.#length = 0;
  }

  pull(index) {
    if (index < 0 || index >= this.#length) return;
    let node = this.#getNode(index);
    let data = node.data;

    this.#remove(node);
    this.#length--;
    return data;
  }

  atPos(index) {
    return this.#getNode(index)?.data;
  }

  find(data, compare){
    let node = this.#head;
    while (node) {
      if (!compare(node.data, data)) {
        return node.data;
      }
      node = node.next;
    }
    return null;
  }

  insert(index, data) {
    if (index < 0 || index > this.#length) return;

    this.#length++;
    if (!this.#head) {
      this.#head = this.#tail = new Node(data);
      return;
    }

    let node = new Node(data),
      ptr;
    if (!index) {
      node.next = this.#head;
      this.#head.prev = node;
      this.#head = node;
    } else if (index == this.#length - 1) {
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
  }

  includes(data, compare) {
    return !!this.find(data,compare);
  }

  remove(data, compare, all = false) {
    let node = this.#head;
    while (node) {
      if (!compare(node.data, data)) {
        this.#remove(node);
        this.#length--;
        if (!all) return;
      }
      node = node.next;
    }
  }

  concat(list){
    let data, k = 0;
    while(data = list.atPos(k++)){
      this.insert(this.#length, data);
    }
  }

  getCopy(){
    let list = new LinkedList();
    list.concat(this);
    return list;
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

  #remove(node) {
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
  }

  get length() {
    return this.#length;
  }
}

module.exports = LinkedList;