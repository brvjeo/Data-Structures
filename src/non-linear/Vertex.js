class Vertex {
  constructor(key, weight) {
    if (key == undefined) {
      throw new Error('Undefined data!');
    }
    this.key = key;
    this.weight = weight;
  }
}

module.exports = Vertex;