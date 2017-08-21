'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Loader;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Loader(_ref) {
  var inverse = _ref.inverse,
      bg = _ref.bg;

  var className = (0, _classnames2.default)('rx-loader', {
    'rx-loader--inverse': inverse && !bg,
    'rx-loader--light-bg': !inverse && bg,
    'rx-loader--dark-bg': inverse && bg
  });
  return _react2.default.createElement(
    'div',
    { className: className },
    _react2.default.createElement(_Icon2.default, { name: 'logo-outer' }),
    _react2.default.createElement(_Icon2.default, { name: 'logo-inner' }),
    _react2.default.createElement(_Icon2.default, { name: 'logo-letter' })
  );
}