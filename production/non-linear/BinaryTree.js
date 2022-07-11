"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var BinaryTree = /*#__PURE__*/function () {
  function BinaryTree() {
    _classCallCheck(this, BinaryTree);

    throw new Error('Static class!');
  }

  _createClass(BinaryTree, null, [{
    key: "inOrderPrint",
    value: function inOrderPrint(node) {
      if (node) {
        this.inOrderPrint(node.left);
        console.log(node.data);
        this.inOrderPrint(node.right);
      }
    }
  }, {
    key: "preOrderPrint",
    value: function preOrderPrint(node) {
      if (node) {
        console.log(node.data);
        this.preOrderPrint(node.left);
        this.preOrderPrint(node.right);
      }
    }
  }, {
    key: "postOrderPrint",
    value: function postOrderPrint(node) {
      if (node) {
        this.postOrderPrint(node.left);
        this.postOrderPrint(node.right);
        console.log(node.data);
      }
    }
  }]);

  return BinaryTree;
}();

module.exports = BinaryTree;