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

  remove(key) {
    return this.#removeNode(this.#root, key, null);
  }

  #removeNode(root, key, parent) {
    let data;
    let sideParent;

    if (key === root.data.key) {
      data = root.data.key;
      if (!root.left && !root.right) {
        root = null;
        parent = null;
      }else if(root.left){
        parent = root.left;
        root = null;
      }else if(root.right){
        parent = root.right;
        root = null;
      }else if(root.right && root.left){
        let node = root.right;
        sideParent = root;
        while(node.left){
          sideParent = node;
          node = node.left;
        }
        sideParent.left = null;
        node.right = root.right;
        node.left = root.left;
        root = null;
        parent = node;
      }
      return data;
    }else if(key < root.data.key){
      this.#removeNode(root.left,key,root.left)
    }
  }

  find(key) {
    return this.#getNode(this.#root, key)?.value;
  }

  #getNode(root, key) {
    if (!root) return;
    if (key === root.data.key) {
      return root.data;
    } else if (key < root.data.key) {
      return this.#getNode(root.left, key);
    } else if (key > root.data.key) {
      return this.#getNode(root.right, key);
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

module.exports = BinarySearchTree;
