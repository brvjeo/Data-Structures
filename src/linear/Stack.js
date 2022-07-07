const LinkedList = require("./LinkedList.js");

class Stack{
    #list = new LinkedList();

    [Symbol.iterator](){
        return this.#list[Symbol.iterator]();
    }

    pop(){
        if(this.isEmpty()) return;
        return this.#list.pull(this.length-1);
    }

    push(data){
        this.#list.insert(this.length,data);
    }

    peek(){
        if(this.isEmpty()) return;
        return this.#list.get(this.length-1);
    }

    isEmpty(){
        return this.#list.isEmpty();
    }

    get length(){
        return this.#list.length;
    }
}

module.exports = Stack;