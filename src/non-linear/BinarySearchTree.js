import { Node } from "./Node.js";
import { BinaryTree } from "./BinaryTree.js";

export class BinarySearchTree {
    #root = null;

    insert(key, value) {
        let data = { key, value };

        if (!this.#root) {
            this.#root = new Node(data);
            return;
        }
        this.#addNode(this.#root, data);
    }

    #addNode(root, data) {
        if (data.key < root.data.key) {
            if (!root.left) {
                root.left = new Node(data);
            } else {
                this.#addNode(root.left, data);
            }
        } else {
            if (!root.right) {
                root.right = new Node(data);
            } else {
                this.#addNode(root.right, data);
            }
        }
    }

    preOrderPrint() {
        BinaryTree.preOrderPrint(this.#root);
    }

    inOrderPrint() {
        BinaryTree.inOrderPrint(this.#root);
    }

    postOrderPrint() {
        BinaryTree.postOrderPrint(this.#root);
    }
}