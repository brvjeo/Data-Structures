class Vertex {
  constructor(key, weight) {
    if (key == null || weight == null) {
      throw new Error("Fields can't be null or undefined");
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
    return String(this.key);
  }
}

module.exports = Vertex;
