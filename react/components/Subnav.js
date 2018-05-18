'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Container = require('./Container');

var _Container2 = _interopRequireDefault(_Container);

var _BaseLink = require('./BaseLink');

var _BaseLink2 = _interopRequireDefault(_BaseLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Subnav = function (_PureComponent) {
  _inherits(Subnav, _PureComponent);

  function Subnav(props) {
    _classCallCheck(this, Subnav);

    var _this = _possibleConstructorReturn(this, (Subnav.__proto__ || Object.getPrototypeOf(Subnav)).call(this, props));

    _this.getLink = _this.getLink.bind(_this);
    return _this;
  }

  _createClass(Subnav, [{
    key: 'getLink',
    value: function getLink(_ref, i) {
      var text = _ref.text,
          active = _ref.active,
          rest = _objectWithoutProperties(_ref, ['text', 'active']);

      var className = (0, _classnames2.default)('rx-subnav__link', {
        'rx-subnav__link--active': active
      });
      var props = _extends({
        key: i,
        className: className,
        children: text
      }, rest);
      return _react2.default.createElement(_BaseLink2.default, props);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'nav',
        { className: 'rx-subnav' },
        this.props.fullWidth ? this.links : this.container
      );
    }
  }, {
    key: 'links',
    get: function get() {
      return _react2.default.createElement(
        'div',
        { className: 'rx-subnav__links' },
        this.props.links.map(this.getLink)
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
      return _react2.default.createElement(_Container2.default, { noPad: true, children: this.links });
    }
  }]);

  return Subnav;
}(_react.PureComponent);

exports.default = Subnav;


Subnav.propTypes = {
  links: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    href: _propTypes2.default.string,
    text: _propTypes2.default.any,
    active: false
  })).isRequired
};