const LinkedList = require("../linear/LinkedList.js");
const Queue = require("../linear/Queue.js");
const Stack = require("../linear/Stack.js");
const Vertex = require("./Vertex.js");

class Graph {
  #graph = {};

  addVertex(i) {
    if (!this.#graph[i]) this.#graph[i] = new LinkedList();
  }

  removeVertex(i) {
    if (!this.#graph[i]) return false;

    [...this.#graph[i]].forEach((vertex) => {
      this.#graph[vertex.key].remove(i, (x, y) => !(x.key == y));
    });

    delete this.#graph[i];
    return true;
  }

  addEdge(i, j, weight) {
    if (weight == null || typeof weight != typeof 1)
      throw new Error("Weight must be number!");
    if (!this.#graph[i] || !this.#graph[j]) return;

    let vertex = this.#graph[i].find(j, (x, y) => !(x.key == y));
    if (vertex && weight < vertex.weight) {
      vertex.weight = weight;
      return;
    }

    this.#graph[i].insert(this.#graph[i].length, new Vertex(j, weight));
  }

  removeEdge(i, j) {
    let flag = false;
    this.#graph[i]?.remove(j, (x, y) => {
      if (x.key == y) {
        flag = true;
        return 0;
      }
      return 1;
    });
    return flag;
  }

  adjacent(i, j) {
    return !!this.#graph[i]?.includes(j, (x, y) => !(x.key == y));
  }

  contract(i, j) {
    if (!this.#graph[i] || !this.#graph[j]) return false;

    this.removeEdge(i, j);
    this.removeEdge(j, i);

    [...this.#graph[j]].forEach((vertex) => {
      this.addEdge(i, vertex.key, vertex.weight);
    });

    delete this.#graph[j];

    let list, weight;
    Object.keys(this.#graph).forEach((key) => {
      list = this.#graph[key];
      [...list].forEach((vertex, index) => {
        if (vertex.key == j) {
          weight = vertex.weight;
          list.pull(index);
          this.addEdge(key, i, weight);
        }
      });
    });

    return true;
  }

  cleave(i, j, weight) {
    if (!this.#graph[i] || this.#graph[j]) return false;

    let vertex;
    this.#graph[j] = this.#graph[i].getCopy();
    Object.keys(this.#graph).forEach((key) => {
      vertex = this.#graph[key].find(i, (x, y) => !(x.key == y));
      if (vertex) {
        this.addEdge(key, j, vertex.weight);
      }
    });
    this.addEdge(i, j, weight);
    this.addEdge(j, i, weight);
    return true;
  }

  next(i, curr) {
    return [...this.#graph[i]].find((v, i, arr) => arr[i - 1]?.key == curr)?.key;
  }

  BFS(i) {
    if (!this.#graph[i]) return;
    let queue = new Queue();
    let visited = [];

    console.log(i);
    queue.push(i);
    visited.unshift(i);

    while (queue.length) {
      for (let vertex of this.#graph[queue.shift()]) {
        if (!visited.includes(vertex.key)) {
          console.log(vertex.key);
          visited.unshift(vertex.key);
          queue.push(vertex.key);
        }
      }
    }
  }

  DFS(i) {
    let stack = new Stack();
    let visited = [];

    stack.push(i);
    console.log(i);
    visited.unshift(i);

    let x, y = null;
    while (stack.length) {
      x = stack.get();

      do {
        y = this.next(x, y);
      } while (visited.includes(y));

      if (y != null) {
        console.log(y);
        stack.push(y);
        visited.unshift(y);
        y = null;
      } else {
        stack.pop();
        y = x;
      }
    }
  }

  display() {
    Object.entries(this.#graph).forEach((pair) =>
      console.log(`${pair[0]} : ${[...pair[1]]}`)
    );
  }
}

module.exports = Graph;