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
    let data, node = null, sideParent = null;

    if (key === root.data.key) {
      data = root.data.key;
      if (!root.left && !root.right) {
        if(parent){
          parent[((parent.left === root ) ? 'left' : 'right')] = null;
        }
      }else if(root.left && root.right){
        node = root.left;
        sideParent = root;
        while(node.right){
          sideParent = node;
          node = node.right;
        }
        sideParent.right = node.left || null;
        if(parent){
          parent[((parent.left === root ) ? 'left' : 'right')] = node;
        }
        node.left = root.left;
        node.right = root.right;
        if(root === this.#root){
          this.#root = node;
        }
      }else if(root.left){
        if(parent){
          parent[((parent.left === root ) ? 'left' : 'right')] = root.left;
        }
      }else{
        if(parent){
          parent[((parent.left === root ) ? 'left' : 'right')] = root.right;
        }
      }
      root = null;
      return data;
    } else if (key < root.data.key) {
      return this.#removeNode(root.left, key, root);
    } else if (key > root.data.key) {
      return this.#removeNode(root.right, key, root);
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
