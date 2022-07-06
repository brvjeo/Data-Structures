const LinkedList = require("./LinkedList.js");

class Stack{
    #list = new LinkedList();

    [Symbol.iterator](){
        return this.#list[Symbol.iterator]();
    }

    pop(){
        if(!this.length) return;
        return this.#list.pull(this.length-1);
    }

    push(data){
        this.#list.insert(this.length,data);
    }

    get(){
        if(!this.length) return;
        return this.#list.atPos(this.length-1);
    }

    get length(){
        return this.#list.length;
    }
}

module.exports = Stack;

