'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _omit = require('../utils/omit');

var _omit2 = _interopRequireDefault(_omit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Notice = function (_PureComponent) {
  _inherits(Notice, _PureComponent);

  function Notice() {
    _classCallCheck(this, Notice);

    return _possibleConstructorReturn(this, (Notice.__proto__ || Object.getPrototypeOf(Notice)).apply(this, arguments));
  }

  _createClass(Notice, [{
    key: 'render',
    value: function render() {
      var props = (0, _omit2.default)(this.props, 'className', 'variant', 'text', 'children');
      return _react2.default.createElement(
        'div',
        _extends({}, props, { className: this.className }),
        this.icon,
        this.props.children || this.props.text
      );
    }
  }, {
    key: 'className',
    get: function get() {
      return (0, _classnames2.default)('rx-notice', _defineProperty({}, 'rx-notice--' + this.props.variant, this.props.variant));
    }
  }, {
    key: 'icon',
    get: function get() {
      if (!this.props.icon) return null;
      return _react2.default.createElement('span', { className: 'rx-icon rx-icon--' + this.props.icon });
    }
  }]);

  return Notice;
}(_react.PureComponent);

exports.default = Notice;