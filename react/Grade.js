'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Grade;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Grade(_ref) {
  var large = _ref.large,
      children = _ref.children;

  var str = children ? children.toLowerCase().replace(/[^a-z]/g, '') : 'wip';
  var className = (0, _classnames2.default)('rx-grade', 'rx-grade--' + str, { 'rx-grade--large': large });
  return _react2.default.createElement(
    'div',
    { className: className },
    children
  );
}