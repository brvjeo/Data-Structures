const Node = require("./node.js");

class Deque{
    #head = null;
    #tail = null;
    #length = 0;

    [Symbol.iterator](){
        let that = this;
        return{
            count:0,
            next(){
                if(this.count < that.#length){
                    return{
                        done:false,
                        value:that.nodeAt(this.count++)
                    }
                }else{
                    return{
                        done:true,
                        value:undefined
                    }
                }
            }
        }
    }
    push(value){
        let node = new Node();
        node.value = value;
        this.#length++;
        if(!this.#tail){
            this.#head = node;
            this.#tail = node;
            return;
        }
        this.#tail.next = node;
        node.prev = this.#tail;

        this.#tail = node;
    }
    unshift(value){
        let node = new Node();
        node.value = value;
        this.#length++;
        if(!this.#head){
            this.#head = node;
            this.#tail = node;
            return;
        }
        this.#head.prev = node;
        node.next = this.#head;

        this.#head = node;
    }
    pop(){
        if(!this.#tail){return}

        let value = this.#tail.value;
        this.#length--;
        if(!this.#tail.prev){
            this.#head = null;
            this.#tail = null;
            return value;
        }

        this.#tail.prev.next = null;
        this.#tail = this.#tail.prev;
        return value;
    }
    shift(){
        if(!this.#head){return}

        let value = this.#head.value;
        this.#length--;
        if(!this.#head.next){
            this.#head = null;
            this.#tail = null;
            return value;
        }

        this.#head.next.prev = null;
        this.#head = this.#head.next;
        return value;
    }
    nodeAt(index){
        if(index < 0){
            if(Math.abs(index) > this.#length) return;
            index = this.#length + index;
        }
        if(index >= this.#length) return;

        let node = new Node();
        if(index+1 >= Math.ceil(this.#length/2)){
            node = this.#tail;
            for(let i = 0;i < this.#length - 1 - index;i++){
                node = node.prev;
            }
        }else{
            node = this.#head;
            for(let i = 0;i < index;i++){
                node = node.next;
            }
        }

        return node.value;
    }
    get length(){
        return this.#length;
    }
}

module.exports = Deque;
