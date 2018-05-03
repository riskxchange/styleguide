'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = EmailLink;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function EmailLink(_ref) {
  var children = _ref.children,
      subject = _ref.subject;

  return _react2.default.createElement(
    'a',
    { href: 'mailto:' + children + '?subject=' + (subject || ''),
      className: 'rx-link' },
    children
  );
}