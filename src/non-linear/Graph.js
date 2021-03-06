const LinkedList = require('../linear/LinkedList.js');
const BinaryHeap = require('./BinaryHeap.js');
const Queue = require('../linear/Queue.js');
const Stack = require('../linear/Stack.js');
const Vertex = require('./Vertex.js');

class Graph {
  #graph = {};

  addVertex(i) {
    if (!this.#graph[i]) this.#graph[i] = new LinkedList();
  }

  removeVertex(i) {
    if (!this.#graph[i]) return;

    [...this.#graph[i]].forEach((vertex) => {
      this.#graph[vertex.key].remove(i, (x, y) => !(x.key == y));
    });

    delete this.#graph[i];
  }

  addEdge(i, j, weight) {
    if (weight == null || typeof weight != typeof 1) throw new Error('Weight must be number!');
    if (!this.#graph[i] || !this.#graph[j]) return;

    let vertex = this.#graph[i].find(j, (x, y) => !(x.key == y));
    if (vertex && weight < vertex.weight) {
      vertex.weight = weight;
      return;
    }

    this.#graph[i].insert(this.#graph[i].length, new Vertex(j, weight));
  }

  removeEdge(i, j) {
    this.#graph[i]?.remove(j, (x, y) => !(x.key == y));
  }

  adjacent(i, j) {
    return !!this.#graph[i]?.includes(j, (x, y) => !(x.key == y));
  }

  contract(i, j) {
    if (!this.#graph[i] || !this.#graph[j]) return;

    this.removeEdge(i, j);
    this.removeEdge(j, i);

    [...this.#graph[j]].forEach((vertex) => {
      this.addEdge(i, vertex.key, vertex.weight);
    });

    delete this.#graph[j];

    let list;
    Object.keys(this.#graph).forEach((key) => {
      list = this.#graph[key];
      [...list].forEach((vertex, index) => {
        if (vertex.key == j) {
          list.pull(index);
          this.addEdge(key, i, vertex.weight);
        }
      });
    });
  }

  cleave(i, j, weight) {
    if (!this.#graph[i] || this.#graph[j]) return;

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
  }

  getEdgeValue(i, j) {
    if (!this.#graph[i] || !this.#graph[j]) return;

    return this.#graph[i].find(j, (x, y) => !(x.key == y))?.weight;
  }

  next(i, curr) {
    return [...this.#graph[i]].find((v, i, arr) => arr[i - 1]?.key == curr)?.key;
  }

  BFS(i) {
    let queue = new Queue();
    this.#traverse(i, queue, queue.enqueue.bind(queue), queue.dequeue.bind(queue), queue.peek.bind(queue));
  }

  DFS(i) {
    let stack = new Stack();
    this.#traverse(i, stack, stack.push.bind(stack), stack.pop.bind(stack), stack.peek.bind(stack));
  }

  Dijkstra(i) {
    let visited = new Array();
    let heap = new BinaryHeap((x,y) => y.value - x.value);
    let pathes = new Map();

    Object.keys(this.#graph).forEach(key => {
      if(key == i){
        pathes.set(key,0);
      }else{
        pathes.set(key,Infinity);
      }
    });

    heap.add({key: i, value: 0});

    let x,y = null,length;
    while(!heap.isEmpty()){
      x = heap.pull();
      while((y = this.next(x.key,y)) != null){
        if(visited.includes(y)) continue;
        
        length = x.value + this.getEdgeValue(x.key,y);
        if(length < pathes.get(String(y))){
          pathes.set(String(y),length);
        }

        heap.add({key: y, value: pathes.get(String(y))});
      }
      visited.unshift(x.key);
    }

    console.log(pathes);
  }

  #traverse(i, struct, insert, pull, peek) {
    let visited = [];
    let x, y = null;

    console.log(i);
    visited.unshift(i);
    insert(i);
    while (!struct.isEmpty()) {
      x = peek();
      do {
        y = this.next(x, y);
      } while (visited.includes(y));

      if (y != undefined) {
        console.log(y);
        insert(y);
        visited.unshift(y);
        if (struct instanceof Stack) {
          y = null;
        }
      } else {
        if (struct instanceof Queue) {
          y = null;
        } else {
          y = x;
        }
        pull();
      }
    }
  }
}

module.exports = Graph;