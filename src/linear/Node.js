class Node {
    constructor(data){
        if((data == undefined) || (data == null)) throw new Error("Null data!");

        this.prev = null;
        this.next = null;
        this.data = data;
    }
}

module.exports = Node;