class Vertex {
  constructor(key, weight) {
    if (key == undefined) {
      throw new Error('Undefined data!');
    }
    this.key = key;
    this.weight = weight;
  }

  [Symbol.toPrimitive](hint) {
    if (hint == 'default' || hint == 'string') {
      return this.toString();
    } else {
      return this.valueOf();
    }
  }

  valueOf() {
    return this.weight;
  }

  toString() {
    return `${this.key}/${this.weight} `;
  }
}

module.exports = Vertex;
