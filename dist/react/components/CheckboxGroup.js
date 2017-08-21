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

var Checkbox = function (_PureComponent) {
  _inherits(Checkbox, _PureComponent);

  function Checkbox(props) {
    _classCallCheck(this, Checkbox);

    var _this = _possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).call(this, props));

    _this.onChangeHandler = _this.onChangeHandler.bind(_this);
    return _this;
  }

  _createClass(Checkbox, [{
    key: 'onChangeHandler',
    value: function onChangeHandler(e) {
      this.props.onChange(e, this.props);
    }
  }, {
    key: 'render',
    value: function render() {
      var props = (0, _omit2.default)(this.props, 'onChange', 'className', 'type', 'checked', 'selected');
      return _react2.default.createElement('input', _extends({}, props, {
        checked: this.props.selected,
        type: 'checkbox',
        className: 'rx-checkbox',
        onChange: this.onChangeHandler }));
    }
  }]);

  return Checkbox;
}(_react.PureComponent);

var CheckboxGroup = function (_PureComponent2) {
  _inherits(CheckboxGroup, _PureComponent2);

  function CheckboxGroup(props) {
    _classCallCheck(this, CheckboxGroup);

    var _this2 = _possibleConstructorReturn(this, (CheckboxGroup.__proto__ || Object.getPrototypeOf(CheckboxGroup)).call(this, props));

    _this2.onChangeHandler = _this2.onChangeHandler.bind(_this2);
    return _this2;
  }

  _createClass(CheckboxGroup, [{
    key: 'onChangeHandler',
    value: function onChangeHandler(e, option) {
      this.props.onChange(e, option);
    }
  }, {
    key: 'render',
    value: function render() {
      var props = (0, _omit2.default)(this.props, 'onChange', 'className', 'options');
      return _react2.default.createElement('div', _extends({}, props, {
        className: 'rx-checkbox-group',
        children: this.checkboxes }));
    }
  }, {
    key: 'checkboxes',
    get: function get() {
      var _this3 = this;

      return this.props.options.map(function (option, i) {
        return _react2.default.createElement(
          'label',
          { key: i },
          _react2.default.createElement(Checkbox, _extends({ name: _this3.props.name }, option, { onChange: _this3.onChangeHandler })),
          option.text
        );
      });
    }
  }]);

  return CheckboxGroup;
}(_react.PureComponent);

exports.default = CheckboxGroup;