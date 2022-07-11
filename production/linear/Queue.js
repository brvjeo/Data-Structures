"use strict";

var _Symbol$iterator;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

var LinkedList = require('./LinkedList.js');

var _list = /*#__PURE__*/new WeakMap();

_Symbol$iterator = Symbol.iterator;

var Queue = /*#__PURE__*/function () {
  function Queue() {
    _classCallCheck(this, Queue);

    _classPrivateFieldInitSpec(this, _list, {
      writable: true,
      value: new LinkedList()
    });
  }

  _createClass(Queue, [{
    key: _Symbol$iterator,
    value: function value() {
      return _classPrivateFieldGet(this, _list)[Symbol.iterator]();
    }
  }, {
    key: "enqueue",
    value: function enqueue(data) {
      _classPrivateFieldGet(this, _list).insert(this.length, data);
    }
  }, {
    key: "dequeue",
    value: function dequeue() {
      if (this.isEmpty()) return;
      return _classPrivateFieldGet(this, _list).pull(0);
    }
  }, {
    key: "peek",
    value: function peek() {
      if (this.isEmpty()) return;
      return _classPrivateFieldGet(this, _list).get(0);
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return _classPrivateFieldGet(this, _list).isEmpty();
    }
  }, {
    key: "length",
    get: function get() {
      return _classPrivateFieldGet(this, _list).length;
    }
  }]);

  return Queue;
}();

module.exports = Queue;