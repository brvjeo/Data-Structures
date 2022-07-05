class Vertex {
  constructor(key, weight) {
    if (key == null) {
      throw new Error("Undefined data!");
    }
    this.key = key;
    this.weight = weight;
  }

  [Symbol.toPrimitive](hint) {
    if (hint == "number") {
      return this.valueOf();
    } else {
      return this.toString();
    }
  }

  valueOf() {
    return this.weight;
  }

  toString() {
    return `{${this.key} | ${this.weight}}`;
  }
}

module.exports = Vertex;
