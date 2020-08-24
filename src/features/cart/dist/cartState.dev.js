"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addToCart = exports.cartTotal = exports.cartState = void 0;

var _recoil = require("recoil");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var cartState = (0, _recoil.atom)({
  key: "cart",
  "default": []
});
exports.cartState = cartState;
var cartTotal = (0, _recoil.selector)({
  key: "cartTotal",
  get: function get(_ref) {
    var _get = _ref.get;

    var cart = _get(cartState);

    return cart.reduce(function (total, item) {
      return total + item.product.price * item.quantity;
    }, 0);
  }
});
exports.cartTotal = cartTotal;

var addToCart = function addToCart(cart, product) {
  var newCart = _toConsumableArray(cart);

  var foundIndex = cart.findIndex(function (x) {
    return x.id === product.id;
  });

  if (foundIndex >= 0) {
    newCart[foundIndex] = _objectSpread({}, cart[foundIndex], {
      quantity: cart[foundIndex].quantity + 1
    });
    return newCart;
  }

  newCart.push({
    id: product.id,
    product: product,
    quantity: 1
  });
  return newCart;
};

exports.addToCart = addToCart;