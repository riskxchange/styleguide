'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _omit = require('../utils/omit');

var _omit2 = _interopRequireDefault(_omit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Radio = function (_PureComponent) {
  _inherits(Radio, _PureComponent);

  function Radio(props) {
    _classCallCheck(this, Radio);

    var _this = _possibleConstructorReturn(this, (Radio.__proto__ || Object.getPrototypeOf(Radio)).call(this, props));

    _this.onChangeHandler = _this.onChangeHandler.bind(_this);
    return _this;
  }

  _createClass(Radio, [{
    key: 'onChangeHandler',
    value: function onChangeHandler(e) {
      this.props.onChange(e, this.props);
    }
  }, {
    key: 'render',
    value: function render() {
      var props = (0, _omit2.default)(this.props, 'onChange', 'className', 'type', 'checked', 'selected', 'text');
      return _react2.default.createElement('input', _extends({}, props, {
        checked: this.props.selected,
        type: 'radio',
        className: 'rx-radio',
        onChange: this.onChangeHandler }));
    }
  }]);

  return Radio;
}(_react.PureComponent);

var RadioGroup = function (_PureComponent2) {
  _inherits(RadioGroup, _PureComponent2);

  function RadioGroup(props) {
    _classCallCheck(this, RadioGroup);

    var _this2 = _possibleConstructorReturn(this, (RadioGroup.__proto__ || Object.getPrototypeOf(RadioGroup)).call(this, props));

    _this2.onChangeHandler = _this2.onChangeHandler.bind(_this2);
    return _this2;
  }

  _createClass(RadioGroup, [{
    key: 'onChangeHandler',
    value: function onChangeHandler(e, options) {
      this.props.onChange(e, options);
    }
  }, {
    key: 'render',
    value: function render() {
      var props = (0, _omit2.default)(this.props, 'onChange', 'className', 'options');
      return _react2.default.createElement('div', _extends({}, props, {
        className: 'rx-radio-group',
        children: this.radios }));
    }
  }, {
    key: 'radios',
    get: function get() {
      var _this3 = this;

      return this.props.options.map(function (option, i) {
        return _react2.default.createElement(
          'label',
          { key: i },
          _react2.default.createElement(Radio, _extends({ name: _this3.props.name }, option, { onChange: _this3.onChangeHandler })),
          option.text
        );
      });
    }
  }]);

  return RadioGroup;
}(_react.PureComponent);

exports.default = RadioGroup;