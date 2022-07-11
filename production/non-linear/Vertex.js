"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Vertex = /*#__PURE__*/function (_Symbol$toPrimitive) {
  function Vertex(key, weight) {
    _classCallCheck(this, Vertex);

    if (key == undefined) {
      throw new Error('Undefined data!');
    }

    this.key = key;
    this.weight = weight;
  }

  _createClass(Vertex, [{
    key: _Symbol$toPrimitive,
    value: function value(hint) {
      if (hint == 'default' || hint == 'string') {
        return this.toString();
      } else {
        return this.valueOf();
      }
    }
  }, {
    key: "valueOf",
    value: function valueOf() {
      return this.weight;
    }
  }, {
    key: "toString",
    value: function toString() {
      return "".concat(this.key, "/").concat(this.weight, " ");
    }
  }]);

  return Vertex;
}(Symbol.toPrimitive);

module.exports = Vertex;