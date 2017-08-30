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

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _FormActions = require('./FormActions');

var _FormActions2 = _interopRequireDefault(_FormActions);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Form = function (_PureComponent) {
  _inherits(Form, _PureComponent);

  function Form() {
    _classCallCheck(this, Form);

    return _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).apply(this, arguments));
  }

  _createClass(Form, [{
    key: 'render',
    value: function render() {
      var props = (0, _omit2.default)(this.props, 'className', 'children', 'title', 'actions');
      var className = (0, _classnames2.default)('rx-form', this.props.className);
      return _react2.default.createElement(
        'div',
        _extends({ className: className }, props),
        this.title,
        this.props.children,
        this.actions
      );
    }
  }, {
    key: 'actions',
    get: function get() {
      var _this2 = this;

      if (!this.props.actions || !this.props.actions.length) return null;
      var children = this.props.actions.map(function (action, i) {
        var props = (0, _omit2.default)(action, 'children', 'text');
        return _react2.default.createElement(
          _Button2.default,
          _extends({}, props, { key: i }),
          _this2.props.children || _this2.props.text
        );
      });
      return _react2.default.createElement(_FormActions2.default, { children: children });
    }
  }, {
    key: 'title',
    get: function get() {
      if (!this.props.title) return null;
      return _react2.default.createElement(
        'h2',
        { className: 'rx-form__title' },
        this.props.title
      );
    }
  }]);

  return Form;
}(_react.PureComponent);

exports.default = Form;