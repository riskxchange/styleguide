'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Tooltip = require('./Tooltip');

var _Tooltip2 = _interopRequireDefault(_Tooltip);

var _omit = require('../utils/omit');

var _omit2 = _interopRequireDefault(_omit);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import PropTypes from 'prop-types'


var Field = function (_PureComponent) {
  _inherits(Field, _PureComponent);

  function Field() {
    _classCallCheck(this, Field);

    return _possibleConstructorReturn(this, (Field.__proto__ || Object.getPrototypeOf(Field)).apply(this, arguments));
  }

  _createClass(Field, [{
    key: 'render',
    value: function render() {
      var props = (0, _omit2.default)(this.props, 'className', 'label', 'children', 'tooltip', 'info');
      var className = (0, _classnames2.default)('rx-field', this.props.className);
      return _react2.default.createElement(
        'div',
        _extends({}, props, {
          className: className }),
        this.label,
        this.info,
        this.tooltip,
        this.props.children
      );
    }
  }, {
    key: 'label',
    get: function get() {
      if (!this.props.label) return null;
      return _react2.default.createElement('label', { className: 'rx-label', children: this.props.label });
    }
  }, {
    key: 'tooltip',
    get: function get() {
      if (!this.props.tooltip) return null;
      return _react2.default.createElement(_Tooltip2.default, { children: this.props.tooltip });
    }
  }, {
    key: 'info',
    get: function get() {
      if (!this.props.info) return null;
      return _react2.default.createElement('div', { className: 'rx-field__info', children: this.props.info });
    }
  }]);

  return Field;
}(_react.PureComponent);

// Field.propTypes = {
//   children: PropTypes.oneOfType([
//     PropTypes.instanceOf(Select),
//     PropTypes.instanceOf(Input),
//     PropTypes.instanceOf(InputGroup),
//     PropTypes.instanceOf(RadioGroup),
//     PropTypes.instanceOf(CheckboxGroup)
//     // TODO: TextArea + FileUpload
//   ])
// }


exports.default = Field;