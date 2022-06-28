class BinaryTree {

    constructor(){
        throw new Error("Static class!");
    }

    static inOrderPrint(node){
        if(node){
            this.inOrderPrint(node.left);
            console.log(node.data);
            this.inOrderPrint(node.right);
        }
    }

    static preOrderPrint(node){
        if(node){
            console.log(node.data);
            this.preOrderPrint(node.left);
            this.preOrderPrint(node.right);
        }
    }

    static postOrderPrint(node){
        if(node){
            this.postOrderPrint(node.left);
            this.postOrderPrint(node.right);
            console.log(node.data);
        }
    }
}

module.exports = BinaryTree;