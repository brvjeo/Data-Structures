class Node {
  constructor(data) {
    if (data == null) {
      throw new Error("Undefined data!");
    }

    this.prev = null;
    this.next = null;
    this.data = data;
  }
}

module.exports = Node;
