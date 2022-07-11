"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

var LinkedList = require('../linear/LinkedList.js');

var BinaryHeap = require('./BinaryHeap.js');

var Queue = require('../linear/Queue.js');

var Stack = require('../linear/Stack.js');

var Vertex = require('./Vertex.js');

var _graph = /*#__PURE__*/new WeakMap();

var _traverse = /*#__PURE__*/new WeakSet();

var Graph = /*#__PURE__*/function () {
  function Graph() {
    _classCallCheck(this, Graph);

    _classPrivateMethodInitSpec(this, _traverse);

    _classPrivateFieldInitSpec(this, _graph, {
      writable: true,
      value: {}
    });
  }

  _createClass(Graph, [{
    key: "addVertex",
    value: function addVertex(i) {
      if (!_classPrivateFieldGet(this, _graph)[i]) _classPrivateFieldGet(this, _graph)[i] = new LinkedList();
    }
  }, {
    key: "removeVertex",
    value: function removeVertex(i) {
      var _this = this;

      if (!_classPrivateFieldGet(this, _graph)[i]) return false;

      _toConsumableArray(_classPrivateFieldGet(this, _graph)[i]).forEach(function (vertex) {
        _classPrivateFieldGet(_this, _graph)[vertex.key].remove(i, function (x, y) {
          return !(x.key == y);
        });
      });

      delete _classPrivateFieldGet(this, _graph)[i];
      return true;
    }
  }, {
    key: "addEdge",
    value: function addEdge(i, j, weight) {
      if (weight == null || _typeof(weight) != _typeof(1)) throw new Error('Weight must be number!');
      if (!_classPrivateFieldGet(this, _graph)[i] || !_classPrivateFieldGet(this, _graph)[j]) return;

      var vertex = _classPrivateFieldGet(this, _graph)[i].find(j, function (x, y) {
        return !(x.key == y);
      });

      if (vertex && weight < vertex.weight) {
        vertex.weight = weight;
        return;
      }

      _classPrivateFieldGet(this, _graph)[i].insert(_classPrivateFieldGet(this, _graph)[i].length, new Vertex(j, weight));
    }
  }, {
    key: "removeEdge",
    value: function removeEdge(i, j) {
      var _classPrivateFieldGet2;

      var flag = false;
      (_classPrivateFieldGet2 = _classPrivateFieldGet(this, _graph)[i]) === null || _classPrivateFieldGet2 === void 0 ? void 0 : _classPrivateFieldGet2.remove(j, function (x, y) {
        if (x.key == y) {
          flag = true;
          return 0;
        }

        return 1;
      });
      return flag;
    }
  }, {
    key: "adjacent",
    value: function adjacent(i, j) {
      var _classPrivateFieldGet3;

      return !!((_classPrivateFieldGet3 = _classPrivateFieldGet(this, _graph)[i]) !== null && _classPrivateFieldGet3 !== void 0 && _classPrivateFieldGet3.includes(j, function (x, y) {
        return !(x.key == y);
      }));
    }
  }, {
    key: "contract",
    value: function contract(i, j) {
      var _this2 = this;

      if (!_classPrivateFieldGet(this, _graph)[i] || !_classPrivateFieldGet(this, _graph)[j]) return false;
      this.removeEdge(i, j);
      this.removeEdge(j, i);

      _toConsumableArray(_classPrivateFieldGet(this, _graph)[j]).forEach(function (vertex) {
        _this2.addEdge(i, vertex.key, vertex.weight);
      });

      delete _classPrivateFieldGet(this, _graph)[j];
      var list, weight;
      Object.keys(_classPrivateFieldGet(this, _graph)).forEach(function (key) {
        list = _classPrivateFieldGet(_this2, _graph)[key];

        _toConsumableArray(list).forEach(function (vertex, index) {
          if (vertex.key == j) {
            weight = vertex.weight;
            list.pull(index);

            _this2.addEdge(key, i, weight);
          }
        });
      });
      return true;
    }
  }, {
    key: "cleave",
    value: function cleave(i, j, weight) {
      var _this3 = this;

      if (!_classPrivateFieldGet(this, _graph)[i] || _classPrivateFieldGet(this, _graph)[j]) return false;
      var vertex;
      _classPrivateFieldGet(this, _graph)[j] = _classPrivateFieldGet(this, _graph)[i].getCopy();
      Object.keys(_classPrivateFieldGet(this, _graph)).forEach(function (key) {
        vertex = _classPrivateFieldGet(_this3, _graph)[key].find(i, function (x, y) {
          return !(x.key == y);
        });

        if (vertex) {
          _this3.addEdge(key, j, vertex.weight);
        }
      });
      this.addEdge(i, j, weight);
      this.addEdge(j, i, weight);
      return true;
    }
  }, {
    key: "getEdgeValue",
    value: function getEdgeValue(i, j) {
      var _classPrivateFieldGet4;

      if (!_classPrivateFieldGet(this, _graph)[i] || !_classPrivateFieldGet(this, _graph)[j]) return;
      return (_classPrivateFieldGet4 = _classPrivateFieldGet(this, _graph)[i].find(j, function (x, y) {
        return !(x.key == y);
      })) === null || _classPrivateFieldGet4 === void 0 ? void 0 : _classPrivateFieldGet4.weight;
    }
  }, {
    key: "next",
    value: function next(i, curr) {
      var _find;

      return (_find = _toConsumableArray(_classPrivateFieldGet(this, _graph)[i]).find(function (v, i, arr) {
        var _arr;

        return ((_arr = arr[i - 1]) === null || _arr === void 0 ? void 0 : _arr.key) == curr;
      })) === null || _find === void 0 ? void 0 : _find.key;
    }
  }, {
    key: "BFS",
    value: function BFS(i) {
      var queue = new Queue();

      _classPrivateMethodGet(this, _traverse, _traverse2).call(this, i, queue, queue.enqueue.bind(queue), queue.dequeue.bind(queue), queue.peek.bind(queue));
    }
  }, {
    key: "DFS",
    value: function DFS(i) {
      var stack = new Stack();

      _classPrivateMethodGet(this, _traverse, _traverse2).call(this, i, stack, stack.push.bind(stack), stack.pop.bind(stack), stack.peek.bind(stack));
    }
  }, {
    key: "Dijkstra",
    value: function Dijkstra(i) {
      var visited = new Array();
      var heap = new BinaryHeap(function (x, y) {
        return y.value - x.value;
      });
      var pathes = new Map();
      Object.keys(_classPrivateFieldGet(this, _graph)).forEach(function (key) {
        if (key == i) {
          pathes.set(key, 0);
        } else {
          pathes.set(key, Infinity);
        }
      });
      heap.add({
        key: i,
        value: 0
      });
      var x,
          y = null,
          length;

      while (!heap.isEmpty()) {
        x = heap.pull();

        while ((y = this.next(x.key, y)) != null) {
          if (visited.includes(y)) continue;
          length = x.value + this.getEdgeValue(x.key, y);

          if (length < pathes.get(String(y))) {
            pathes.set(String(y), length);
          }

          heap.add({
            key: y,
            value: pathes.get(String(y))
          });
        }

        visited.unshift(x.key);
      }

      console.log(pathes);
    }
  }]);

  return Graph;
}();

function _traverse2(i, struct, insert, pull, peek) {
  var visited = [];
  var x,
      y = null;
  console.log(i);
  visited.unshift(i);
  insert(i);

  while (!struct.isEmpty()) {
    x = peek();

    do {
      y = this.next(x, y);
    } while (visited.includes(y));

    if (y != undefined) {
      console.log(y);
      insert(y);
      visited.unshift(y);

      if (struct instanceof Stack) {
        y = null;
      }
    } else {
      if (struct instanceof Queue) {
        y = null;
      } else {
        y = x;
      }

      pull();
    }
  }
}

module.exports = Graph;