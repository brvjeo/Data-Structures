export class Node {
    constructor(data){
        if((data == null) || (data == undefined)){
            throw new Error("Undefined data!");
        }
        this.data = data;
        this.left = null;
        this.right = null;
    }
}