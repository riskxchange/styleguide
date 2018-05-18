"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = forEach;
function forEach(array, callback, scope) {
  for (var i = 0; i < array.length; i++) {
    callback.call(scope, array[i]);
  }
}