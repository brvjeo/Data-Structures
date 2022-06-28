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
    let data, node = null;

    if (key === root.data.key) {
      data = root.data.key;

      root = null;
      return data;
    } else if (key < root.data.key) {
      return this.#removeNode(root.left, key, root);
    } else if (key > root.data.key) {
      return this.#removeNode(root.right, key, root);
    }
  }

  find(key) {
    return this.#getNode(this.#root, key, null)?.data.key;
  }

  #getNode(root, key, parent) {
    if (!root) return;
    if (key === root.data.key) {
      return {
        data: root.data,
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

  preOrderPrint() {
    BinaryTree.preOrderPrint(this.#root);
  }

  inOrderPrint() {
    BinaryTree.inOrderPrint(this.#root);
  }

  postOrderPrint() {
    BinaryTree.postOrderPrint(this.#root);
  }

  #getParent(node) {
    return this.#getNode(this.#root, node.data.key, null)?.parent;
  }
}

module.exports = BinarySearchTree;
