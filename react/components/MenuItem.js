'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = MenuItem;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _BaseLink = require('./BaseLink');

var _BaseLink2 = _interopRequireDefault(_BaseLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function MenuItem(_ref) {
  var text = _ref.text,
      children = _ref.children,
      active = _ref.active,
      rest = _objectWithoutProperties(_ref, ['text', 'children', 'active']);

  var className = (0, _classnames2.default)('rx-menu__item', {
    'rx-menu__item--active': active
  });
  var props = _extends({}, rest, {
    className: className,
    children: children || text
  });
  return _react2.default.createElement(_BaseLink2.default, props);
}