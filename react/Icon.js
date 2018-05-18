'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Icon;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Icon(_ref) {
  var name = _ref.name,
      type = _ref.type,
      variant = _ref.variant;

  return _react2.default.createElement('span', { className: 'rx-icon rx-icon--' + (type || variant || name) });
}