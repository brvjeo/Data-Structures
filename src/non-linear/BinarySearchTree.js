const Node = require("./Node.js");
const BinaryTree = require("./BinaryTree.js");

class BinarySearchTree {
  #root = null;

  insert(key, value) {
    let data = { key, value };

    if (!this.#root) {
      this.#root = new Node(data);
      return;
    }

    this.#addNode(this.#root, data);
  }

  find(key) {
    return this.#getNode(this.#root, key, null)?.node.data.value;
  }

  remove(key){
    this.#removeNode(this.#root,key);
  }

  get minimum(){
    return this.#getMinimum(this.#root);
  }

  get maximum(){
    return this.#getMaximum(this.#root);
  }

  preOrderPrint() {
    if (!this.#root) console.log("Tree is empty!");
    BinaryTree.preOrderPrint(this.#root);
  }

  inOrderPrint() {
    if (!this.#root) console.log("Tree is empty!");
    BinaryTree.inOrderPrint(this.#root);
  }

  postOrderPrint() {
    if (!this.#root) console.log("Tree is empty!");
    BinaryTree.postOrderPrint(this.#root);
  }

  #removeNode(node, key) {
    if (!node) return null;

    if (key < node.data.key) {
      node.left = this.#removeNode(node.left, key);
    } else if (key > node.data.key) {
      node.right = this.#removeNode(node.right, key);
    } else if (node.left && node.right) {
      node.data = this.#getMinimum(node.right);
      node.right = this.#removeNode(node.right, node.data.key);
    } else {
      if (node.left) {
        if(node === this.#root) this.#root = node.left;
        node = node.left;
      } else if (node.right) {
        if(node === this.#root) this.#root = node.right;
        node = node.right;
      } else {
        if(node === this.#root) this.#root = null;
        node = null;
      }
    }

    return node;
  }

  #getNode(root, key, parent) {
    if (!root) return;
    if (key === root.data.key) {
      return {
        node: root,
        parent
      };
    } else if (key < root.data.key) {
      return this.#getNode(root.left, key, root);
    } else if (key > root.data.key) {
      return this.#getNode(root.right, key, root);
    }
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

  #getMinimum(root) {
    if (!root) return;

    if (root.left) {
      return this.#getMinimum(root.left);
    } else {
      return root.data;
    }
  }

  #getMaximum(root){
    if (!root) return;

    if (root.right) {
      return this.#getMinimum(root.right);
    } else {
      return root.data;
    }
  }
}

module.exports = BinarySearchTree;