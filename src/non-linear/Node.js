class Node {
    constructor(data){
        if(data == null){
            throw new Error('Undefined data!');
        }
        this.data = data;
        this.left = null;
        this.right = null;
        this.parent = null;
    }
}

module.exports = Node;