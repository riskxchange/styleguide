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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tooltip = function (_PureComponent) {
  _inherits(Tooltip, _PureComponent);

  function Tooltip(props) {
    _classCallCheck(this, Tooltip);

    var _this = _possibleConstructorReturn(this, (Tooltip.__proto__ || Object.getPrototypeOf(Tooltip)).call(this, props));

    _this.toggleActive = _this.toggleActive.bind(_this);
    _this.state = { active: false };
    return _this;
  }

  _createClass(Tooltip, [{
    key: 'toggleActive',
    value: function toggleActive() {
      this.setState(function (state) {
        return { active: !state.active };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var props = (0, _omit2.default)(this.props, 'className');
      return _react2.default.createElement(
        'div',
        _extends({}, props, { className: this.className }),
        _react2.default.createElement(
          'button',
          { className: 'rx-tooltip__icon', onClick: this.toggleActive },
          '?'
        ),
        _react2.default.createElement(
          'div',
          { className: 'rx-tooltip__message' },
          this.props.children || this.props.text
        )
      );
    }
  }, {
    key: 'className',
    get: function get() {
      return (0, _classnames2.default)('rx-tooltip', {
        'rx-tooltip--active': this.state.active
      });
    }
  }]);

  return Tooltip;
}(_react.PureComponent);

exports.default = Tooltip;