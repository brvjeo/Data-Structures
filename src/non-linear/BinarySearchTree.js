/**
 * Binary Search Tree
 * Main operations:
 * 
 * - SEARCH
 * - INSERT
 * - REMOVE
 * - GET_SUCCESSOR
 * - GET_PREDECESSOR
 * - MINIMUM
 * - MAXIMUM
 */

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
    return this.#getNode(this.#root, key)?.data.value;
  }

  remove(key) {
    return this.#removeNode(this.#root, key);
  }

  get minimum() {
    return this.#getMinimum(this.#root)?.data;
  }

  get maximum() {
    return this.#getMaximum(this.#root)?.data;
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
        if (node === this.#root) this.#root = node.left;
        node = node.left;
      } else if (node.right) {
        if (node === this.#root) this.#root = node.right;
        node = node.right;
      } else {
        if (node === this.#root) this.#root = null;
        node = null;
      }
    }

    return node;
  }

  #getNode(root, key) {
    if (!root) return;
    if (key === root.data.key) {
      return root;
    } else if (key < root.data.key) {
      return this.#getNode(root.left, key);
    } else {
      return this.#getNode(root.right, key);
    }
  }

  #addNode(root, data) {
    if (data.key < root.data.key) {
      if (!root.left) {
        root.left = new Node(data);
        root.left.parent = root;
      } else {
        this.#addNode(root.left, data);
      }
    } else {
      if (!root.right) {
        root.right = new Node(data);
        root.right.parent = root;
      } else {
        this.#addNode(root.right, data);
      }
    }
  }
  /**
   * 
   * @param {Node} node 
   * @returns Next element in a tree.
   */
  #getSuccessor(node) {
    if (node.right) return this.#getMinimum(node.right);
    let y = node.parent;
    while (y && node == y.right) {
      node = y;
      y = y.parent;
    }
    return y;
  }
  /**
   * 
   * @param {Node} node 
   * @returns Previous element in a tree.
   */
  #getPredecessor(node) {
    if (node.left) return this.#getMaximum(node.left);

    let y = node.parent;
    while (y && node == y.left) {
      node = y;
      y = y.parent;
    }
    return y;
  }
  /**
   * 
   * @param {Node} node
   * @returns Minimum from tree 
   */
  #getMinimum(node) {
    if (!node || !node.left) return node;
    return this.#getMinimum(node.left);
  }
  /**
   * 
   * @param {Node} node
   * @returns Maximum from tree 
   */
  #getMaximum(node) {
    if (!node || !node.right) return node;
    return this.#getMaximum(node.right);
  }
}

module.exports = BinarySearchTree;
