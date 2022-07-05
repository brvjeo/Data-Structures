const LinkedList = require("../linear/LinkedList.js");
const Vertex = require("./Vertex.js");

class Graph {
  #graph = {}

  addVertex(i) {
    if (!this.#graph[i]) this.#graph[i] = new LinkedList();
  }

  removeVertex(i) {
    delete this.#graph[i];

    Object.values(this.#graph).forEach(list => {
      list.remove(i, (x,y) => x.key - y,true);
    });
  }

  addEdge(i, j, weight) {
    let includes = this.#graph[i].includes(j, (x,y) => x.key-y);

    if (includes || !this.#graph[i] || !this.#graph[j]) return;

    this.#graph[i].insert(this.length, new Vertex(j, weight));
    this.#graph[j].insert(this.length, new Vertex(i, weight));
  }

  removeEdge(i, j) {
    this.#graph[i]?.remove(j ,(x,y) => x.key-y);
    this.#graph[j]?.remove(i ,(x,y) => x.key-y);
  }

  adjacent(i, j) {
    if (!this.#graph[i] || !this.#graph[j]) return false;
    return this.#graph[i].includes(j, (x,y) => x.key-y);
  }

  contract(i, j) {
    if(!this.#graph[i] || !this.#graph[j]) return;
    if(!this.#graph[i].includes(j, (x,y) => x.key - y)) return;

    this.removeEdge(i,j);
    [...this.#graph[j]].forEach(val => {
      this.addEdge(val.key,i);
    });
    
    this.removeVertex(j);
  }

  cleave(i,j){
    if(this.#graph[j]) return;

    this.#graph[j] = new LinkedList();
    [...this.#graph[i]].forEach( val => {
      this.addEdge(j,val.key);
    });

    this.addEdge(i,j);
  } 

  displayInfo(){
    for(let [k,v] of Object.entries(this.#graph)){
      console.log(`${k} : ${[...v]}`);
    }
  }
}

module.exports = Graph;