export class BinaryTree {

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
            this.inOrderPrint(node.left);
            this.inOrderPrint(node.right);
        }
    }

    static postOrderPrint(node){
        if(node){
            this.inOrderPrint(node.left);
            this.inOrderPrint(node.right);
            console.log(node.data);
        }
    }
}