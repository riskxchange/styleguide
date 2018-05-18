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

var _BaseLink = require('./BaseLink');

var _BaseLink2 = _interopRequireDefault(_BaseLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = function (_PureComponent) {
  _inherits(Button, _PureComponent);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
  }

  _createClass(Button, [{
    key: 'renderLink',
    value: function renderLink() {
      var props = _extends({}, this.cleanProps, {
        className: this.className
      });
      return _react2.default.createElement(_BaseLink2.default, props);
    }
  }, {
    key: 'renderButton',
    value: function renderButton() {
      var disabled = this.props.disabled;
      return _react2.default.createElement('button', _extends({}, this.cleanProps, { className: this.className, disabled: disabled }));
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.href || this.props.to ? this.renderLink() : this.renderButton();
    }
  }, {
    key: 'className',
    get: function get() {
      var _cx;

      return (0, _classnames2.default)('rx-btn', (_cx = {
        'rx-btn--blocked': this.props.blocked
      }, _defineProperty(_cx, 'rx-btn--' + this.props.variant, this.props.variant), _defineProperty(_cx, 'rx-btn--disabled', this.props.disabled), _cx), this.props.className);
    }
  }, {
    key: 'cleanProps',
    get: function get() {
      return (0, _omit2.default)(this.props, 'disabled', 'className', 'blocked', 'variant');
    }
  }]);

  return Button;
}(_react.PureComponent);

exports.default = Button;