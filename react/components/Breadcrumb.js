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

var _BreadcrumbLink = require('./BreadcrumbLink');

var _BreadcrumbLink2 = _interopRequireDefault(_BreadcrumbLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Breadcrumb = function (_PureComponent) {
  _inherits(Breadcrumb, _PureComponent);

  function Breadcrumb() {
    _classCallCheck(this, Breadcrumb);

    return _possibleConstructorReturn(this, (Breadcrumb.__proto__ || Object.getPrototypeOf(Breadcrumb)).apply(this, arguments));
  }

  _createClass(Breadcrumb, [{
    key: 'renderLinks',
    value: function renderLinks() {
      if (!this.props.links) return this.props.children;
      return this.props.links.map(function (link, i) {
        return _react2.default.createElement(
          _BreadcrumbLink2.default,
          { key: i },
          link.text
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var props = (0, _omit2.default)(this.props, 'className', 'children', 'links');
      return _react2.default.createElement(
        'div',
        _extends({}, props, { className: this.className }),
        this.renderLinks()
      );
    }
  }, {
    key: 'className',
    get: function get() {
      return (0, _classnames2.default)('rx-breadcrumb', this.props.className);
    }
  }]);

  return Breadcrumb;
}(_react.PureComponent);

Breadcrumb.Link = _BreadcrumbLink2.default;

exports.default = Breadcrumb;