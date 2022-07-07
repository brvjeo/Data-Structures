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

  clear() {
    this.#head = null;
    this.#tail = null;
    this.#length = 0;
  }

  pull(index) {
    if (index < 0 || index >= this.#length) return;
    let node = this.#getNode(index);
    let data = node.data;

    this.#pullOut(node);
    this.#length--;
    return data;
  }

  get(index) {
    return this.#getNode(index)?.data;
  }

  find(data, compare = defaultCompare) {
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
    if (index < 0 || index > this.#length || (typeof index != typeof 1)) return;

    this.#length++;
    let node = new Node(data);
    if (!this.#head) {
      this.#head = this.#tail = node;
      return;
    }

    let ptr;
    if (!index) {
      node.next = this.#head;
      this.#head.prev = node;
      this.#head = node;
    } else if (index === this.#length - 1) {
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
    if(this.find(data, compare) != null) return true;
    return false;
  }

  remove(data, compare = defaultCompare, all = false) {
    let node = this.#head;
    while (node) {
      if (!compare(node.data, data)) {
        this.#pullOut(node);
        this.#length--;
        if (!all) return;
      }
      node = node.next;
    }
  }

  concat(list) {
    let data, k = 0;
    while (data = list.get(k++)) {
      this.insert(this.#length, data);
    }
  }

  getCopy() {
    let list = new LinkedList();
    list.concat(this);
    return list;
  }

  isEmpty(){
    return !this.#head;
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

  #pullOut(node) {
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

function defaultCompare(x, y) {
  if (x == y) {
    return 0;
  } else if (x < y) {
    return -1;
  } else {
    return 1;
  }
}

const list = new LinkedList();