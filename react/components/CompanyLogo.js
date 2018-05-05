'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = CompanyLogo;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var DEFAULT_LOGO = 'https://riskxchange.imgix.net/logos/default-logo.png';

function CompanyLogo(_ref) {
  var name = _ref.name,
      logoUrl = _ref.logoUrl,
      width = _ref.width,
      w = _ref.w,
      rest = _objectWithoutProperties(_ref, ['name', 'logoUrl', 'width', 'w']);

  var src = (logoUrl || DEFAULT_LOGO) + (width ? '?w=' + width + '&h=' + width : '');
  return _react2.default.createElement('img', _extends({ src: src, alt: '' }, rest));
}