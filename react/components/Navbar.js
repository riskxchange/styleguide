'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Container = require('./Container');

var _Container2 = _interopRequireDefault(_Container);

var _Logo = require('./Logo');

var _Logo2 = _interopRequireDefault(_Logo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navbar = function (_PureComponent) {
  _inherits(Navbar, _PureComponent);

  function Navbar(props) {
    _classCallCheck(this, Navbar);

    var _this = _possibleConstructorReturn(this, (Navbar.__proto__ || Object.getPrototypeOf(Navbar)).call(this, props));

    _this.getLink = _this.getLink.bind(_this);
    return _this;
  }

  _createClass(Navbar, [{
    key: 'getLink',
    value: function getLink(_ref, i) {
      var href = _ref.href,
          text = _ref.text,
          active = _ref.active;

      var className = (0, _classnames2.default)('rx-navbar__link', {
        'rx-navbar__link--active': active
      });
      return _react2.default.createElement(
        'a',
        { className: className, href: href, key: i },
        text
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'nav',
        { className: 'rx-navbar' },
        this.props.fullWidth ? this.inner : this.container
      );
    }
  }, {
    key: 'menu',
    get: function get() {
      return _react2.default.createElement(
        'div',
        { className: 'rx-navbar__menu' },
        _react2.default.createElement(
          'div',
          { className: 'rx-navbar__links' },
          this.props.links.map(this.getLink)
        )
      );
    }
  }, {
    key: 'logo',
    get: function get() {
      var homepage = this.props.homepage || '/';
      return _react2.default.createElement(
        'a',
        { className: 'rx-navbar__logo', href: homepage },
        _react2.default.createElement(_Logo2.default, { inverse: true })
      );
    }
  }, {
    key: 'button',
    get: function get() {
      return _react2.default.createElement(
        'button',
        { className: 'rx-navbar__menu-toggle' },
        _react2.default.createElement('span', { className: 'rx-icon rx-icon--menu-toggle' })
      );
    }
  }, {
    key: 'inner',
    get: function get() {
      return _react2.default.createElement(
        'div',
        null,
        this.logo,
        this.menu
      );
    }
  }, {
    key: 'container',
    get: function get() {
      return _react2.default.createElement(_Container2.default, { noPad: true, children: this.inner });
    }
  }]);

  return Navbar;
}(_react.PureComponent);

exports.default = Navbar;


Navbar.propTypes = {
  links: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    href: _propTypes2.default.string,
    text: _propTypes2.default.any,
    active: false
  })).isRequired
};