'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = BreadcrumbLink;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BaseLink = require('./BaseLink');

var _BaseLink2 = _interopRequireDefault(_BaseLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function BreadcrumbLink(_ref) {
  var children = _ref.children,
      text = _ref.text,
      rest = _objectWithoutProperties(_ref, ['children', 'text']);

  var props = _extends({
    className: 'rx-breadcrumb__link',
    children: children || text
  }, rest);
  return _react2.default.createElement(_BaseLink2.default, props);
}