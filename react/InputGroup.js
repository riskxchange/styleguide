'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Input = require('./Input');

var _Input2 = _interopRequireDefault(_Input);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _omit = require('../utils/omit');

var _omit2 = _interopRequireDefault(_omit);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputGroup = function (_PureComponent) {
  _inherits(InputGroup, _PureComponent);

  function InputGroup() {
    _classCallCheck(this, InputGroup);

    return _possibleConstructorReturn(this, (InputGroup.__proto__ || Object.getPrototypeOf(InputGroup)).apply(this, arguments));
  }

  _createClass(InputGroup, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: this.className },
        this.boxLeft,
        this.input,
        this.boxRight
      );
    }
  }, {
    key: 'className',
    get: function get() {
      var _cx;

      return (0, _classnames2.default)('rx-input-group', (_cx = {
        'rx-btn--blocked': this.props.blocked
      }, _defineProperty(_cx, 'rx-btn--' + this.props.variant, this.props.variant), _defineProperty(_cx, 'rx-btn--disabled', this.props.disabled), _cx));
    }
  }, {
    key: 'box',
    get: function get() {
      var icon = this.props.boxIcon;
      var text = this.props.boxText;
      return _react2.default.createElement(
        'div',
        { className: 'rx-input-group__icon' },
        icon ? _react2.default.createElement(_Icon2.default, { name: icon }) : text
      );
    }
  }, {
    key: 'boxLeft',
    get: function get() {
      return this.props.boxPosition === 'left' ? this.box : null;
    }
  }, {
    key: 'boxRight',
    get: function get() {
      return this.props.boxPosition === 'right' ? this.box : null;
    }
  }, {
    key: 'input',
    get: function get() {
      var props = (0, _omit2.default)(this.props, 'className', 'boxIcon', 'boxPosition', 'boxText');
      return _react2.default.createElement(_Input2.default, props);
    }
  }]);

  return InputGroup;
}(_react.PureComponent);

exports.default = InputGroup;


InputGroup.propTypes = {
  boxIcon: _propTypes2.default.string,
  boxPosition: _propTypes2.default.oneOf(['left', 'right']),
  boxText: _propTypes2.default.string,
  variant: _propTypes2.default.oneOf(['error', 'success']),
  disabled: _propTypes2.default.bool,
  blocked: _propTypes2.default.bool
};

InputGroup.defaultProps = {
  boxPosition: 'left'
};