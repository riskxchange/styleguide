'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Logo;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Logo(_ref) {
  var inverse = _ref.inverse;

  var className = (0, _classnames2.default)('rx-logo', {
    'rx-logo--inverse': inverse
  });
  return _react2.default.createElement('div', { className: className });
}