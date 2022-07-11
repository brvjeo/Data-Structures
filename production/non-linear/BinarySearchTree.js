"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

/**
 * Binary Search Tree
 * Main operations:
 * 
 * - Search
 * - Insert
 * - Remove
 * - Get_Successor
 * - Get_Predecessor
 * - Minimum
 * - Maximum
 */
var Node = require('./Node.js');

var BinaryTree = require('./BinaryTree.js');

var _root = /*#__PURE__*/new WeakMap();

var _removeNode = /*#__PURE__*/new WeakSet();

var _getNode = /*#__PURE__*/new WeakSet();

var _addNode = /*#__PURE__*/new WeakSet();

var _getSuccessor = /*#__PURE__*/new WeakSet();

var _getPredecessor = /*#__PURE__*/new WeakSet();

var _getMinimum = /*#__PURE__*/new WeakSet();

var _getMaximum = /*#__PURE__*/new WeakSet();

var BinarySearchTree = /*#__PURE__*/function () {
  function BinarySearchTree() {
    _classCallCheck(this, BinarySearchTree);

    _classPrivateMethodInitSpec(this, _getMaximum);

    _classPrivateMethodInitSpec(this, _getMinimum);

    _classPrivateMethodInitSpec(this, _getPredecessor);

    _classPrivateMethodInitSpec(this, _getSuccessor);

    _classPrivateMethodInitSpec(this, _addNode);

    _classPrivateMethodInitSpec(this, _getNode);

    _classPrivateMethodInitSpec(this, _removeNode);

    _classPrivateFieldInitSpec(this, _root, {
      writable: true,
      value: null
    });
  }

  _createClass(BinarySearchTree, [{
    key: "insert",
    value: function insert(key, value) {
      var data = {
        key: key,
        value: value
      };

      if (!_classPrivateFieldGet(this, _root)) {
        _classPrivateFieldSet(this, _root, new Node(data));

        return;
      }

      _classPrivateMethodGet(this, _addNode, _addNode2).call(this, _classPrivateFieldGet(this, _root), data);
    }
  }, {
    key: "find",
    value: function find(key) {
      var _classPrivateMethodGe;

      return (_classPrivateMethodGe = _classPrivateMethodGet(this, _getNode, _getNode2).call(this, _classPrivateFieldGet(this, _root), key)) === null || _classPrivateMethodGe === void 0 ? void 0 : _classPrivateMethodGe.data.value;
    }
  }, {
    key: "remove",
    value: function remove(key) {
      _classPrivateMethodGet(this, _removeNode, _removeNode2).call(this, _classPrivateFieldGet(this, _root), key);
    }
  }, {
    key: "minimum",
    get: function get() {
      var _classPrivateMethodGe2;

      return (_classPrivateMethodGe2 = _classPrivateMethodGet(this, _getMinimum, _getMinimum2).call(this, _classPrivateFieldGet(this, _root))) === null || _classPrivateMethodGe2 === void 0 ? void 0 : _classPrivateMethodGe2.data;
    }
  }, {
    key: "maximum",
    get: function get() {
      var _classPrivateMethodGe3;

      return (_classPrivateMethodGe3 = _classPrivateMethodGet(this, _getMaximum, _getMaximum2).call(this, _classPrivateFieldGet(this, _root))) === null || _classPrivateMethodGe3 === void 0 ? void 0 : _classPrivateMethodGe3.data;
    }
  }, {
    key: "preOrderPrint",
    value: function preOrderPrint() {
      if (!_classPrivateFieldGet(this, _root)) console.log('Tree is empty!');
      BinaryTree.preOrderPrint(_classPrivateFieldGet(this, _root));
    }
  }, {
    key: "inOrderPrint",
    value: function inOrderPrint() {
      if (!_classPrivateFieldGet(this, _root)) console.log('Tree is empty!');
      BinaryTree.inOrderPrint(_classPrivateFieldGet(this, _root));
    }
  }, {
    key: "postOrderPrint",
    value: function postOrderPrint() {
      if (!_classPrivateFieldGet(this, _root)) console.log('Tree is empty!');
      BinaryTree.postOrderPrint(_classPrivateFieldGet(this, _root));
    }
  }]);

  return BinarySearchTree;
}();

function _removeNode2(node, key) {
  if (!node) return null;

  if (key < node.data.key) {
    node.left = _classPrivateMethodGet(this, _removeNode, _removeNode2).call(this, node.left, key);
  } else if (key > node.data.key) {
    node.right = _classPrivateMethodGet(this, _removeNode, _removeNode2).call(this, node.right, key);
  } else if (node.left && node.right) {
    node.data = _classPrivateMethodGet(this, _getMinimum, _getMinimum2).call(this, node.right);
    node.right = _classPrivateMethodGet(this, _removeNode, _removeNode2).call(this, node.right, node.data.key);
  } else {
    if (node.left) {
      if (node == _classPrivateFieldGet(this, _root)) _classPrivateFieldSet(this, _root, node.left);
      node = node.left;
    } else if (node.right) {
      if (node == _classPrivateFieldGet(this, _root)) _classPrivateFieldSet(this, _root, node.right);
      node = node.right;
    } else {
      if (node == _classPrivateFieldGet(this, _root)) _classPrivateFieldSet(this, _root, null);
      node = null;
    }
  }

  return node;
}

function _getNode2(root, key) {
  if (!root) return;

  if (key == root.data.key) {
    return root;
  } else if (key < root.data.key) {
    return _classPrivateMethodGet(this, _getNode, _getNode2).call(this, root.left, key);
  } else {
    return _classPrivateMethodGet(this, _getNode, _getNode2).call(this, root.right, key);
  }
}

function _addNode2(root, data) {
  if (data.key < root.data.key) {
    if (!root.left) {
      root.left = new Node(data);
      root.left.parent = root;
    } else {
      _classPrivateMethodGet(this, _addNode, _addNode2).call(this, root.left, data);
    }
  } else {
    if (!root.right) {
      root.right = new Node(data);
      root.right.parent = root;
    } else {
      _classPrivateMethodGet(this, _addNode, _addNode2).call(this, root.right, data);
    }
  }
}

function _getSuccessor2(node) {
  if (node.right) return _classPrivateMethodGet(this, _getMinimum, _getMinimum2).call(this, node.right);
  var y = node.parent;

  while (y && node == y.right) {
    node = y;
    y = y.parent;
  }

  return y;
}

function _getPredecessor2(node) {
  if (node.left) return _classPrivateMethodGet(this, _getMaximum, _getMaximum2).call(this, node.left);
  var y = node.parent;

  while (y && node == y.left) {
    node = y;
    y = y.parent;
  }

  return y;
}

function _getMinimum2(node) {
  if (!node || !node.left) return node;
  return _classPrivateMethodGet(this, _getMinimum, _getMinimum2).call(this, node.left);
}

function _getMaximum2(node) {
  if (!node || !node.right) return node;
  return _classPrivateMethodGet(this, _getMaximum, _getMaximum2).call(this, node.right);
}

module.exports = BinarySearchTree;