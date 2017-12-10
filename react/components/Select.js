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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Select = function (_PureComponent) {
  _inherits(Select, _PureComponent);

  function Select() {
    _classCallCheck(this, Select);

    return _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).apply(this, arguments));
  }

  _createClass(Select, [{
    key: 'render',
    value: function render() {
      var props = (0, _omit2.default)(this.props, 'className', 'children', 'options');
      return _react2.default.createElement(
        'select',
        _extends({}, props, { className: this.className, value: this.value }),
        _react2.default.createElement(
          'option',
          null,
          'Select...'
        ),
        this.options
      );
    }
  }, {
    key: 'className',
    get: function get() {
      var _cx;

      return (0, _classnames2.default)('rx-select', (_cx = {
        'rx-select--blocked': this.props.blocked
      }, _defineProperty(_cx, 'rx-select--' + this.props.variant, this.props.variant), _defineProperty(_cx, 'rx-select--disabled', this.props.disabled), _cx), this.props.className);
    }
  }, {
    key: 'options',
    get: function get() {
      return this.props.options.map(function (option) {
        var props = (0, _omit2.default)(option, 'text', 'selected');
        return _react2.default.createElement('option', _extends({ children: option.text }, props, { key: option.value }));
      });
    }
  }, {
    key: 'value',
    get: function get() {
      return this.props.options.reduce(function (value, option) {
        return option.selected ? option.value : value;
      }, '');
    }
  }]);

  return Select;
}(_react.PureComponent);

exports.default = Select;


Select.propTypes = {
  variant: _propTypes2.default.oneOf(['error', 'success']),
  disabled: _propTypes2.default.bool,
  blocked: _propTypes2.default.bool
};

Select.defaultProps = {
  onChange: function onChange(e) {
    console.warn('Please set onChange handler for Select component');
  }
};