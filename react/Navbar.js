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

var _Container = require('./Container');

var _Container2 = _interopRequireDefault(_Container);

var _Logo = require('./Logo');

var _Logo2 = _interopRequireDefault(_Logo);

var _Searchbar = require('./Searchbar');

var _Searchbar2 = _interopRequireDefault(_Searchbar);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _BaseLink = require('./BaseLink');

var _BaseLink2 = _interopRequireDefault(_BaseLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DEFAULT_PROPS = {
  fixed: false,
  fullWidth: false,
  homepage: '/',
  searchbar: false,
  title: null,
  titleLink: null,
  searchbarConfig: {
    onChange: function onChange(query) {
      return console.warn('Searchbar query: ' + query);
    },
    results: [],
    notFoundText: '',
    onResultClick: {},
    onNotFoundClick: {}
  }
};

var Navbar = function (_PureComponent) {
  _inherits(Navbar, _PureComponent);

  function Navbar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Navbar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Navbar.__proto__ || Object.getPrototypeOf(Navbar)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      visible: null
    }, _this.onBackgroundClicked = function (e) {
      if (e.target.classList.contains('rx-navbar')) {
        _this.setState({ visible: null });
      }
    }, _this.toggleSearchbarMobileVisible = function () {
      _this.setState(function (_ref2) {
        var visible = _ref2.visible;

        return { visible: visible === 'searchbar' ? null : 'searchbar' };
      });
    }, _this.toggleMenuMobileVisible = function () {
      _this.setState(function (_ref3) {
        var visible = _ref3.visible;

        return { visible: visible === 'menu' ? null : 'menu' };
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Navbar, [{
    key: 'renderLogo',
    value: function renderLogo() {
      return _react2.default.createElement(
        _BaseLink2.default,
        { className: 'rx-navbar__logo', href: this.props.homepage },
        _react2.default.createElement(_Logo2.default, { inverse: true })
      );
    }
  }, {
    key: 'renderTitle',
    value: function renderTitle() {
      if (!this.props.title) return null;
      return _react2.default.createElement(
        'div',
        { className: 'rx-navbar__title' },
        this.props.titleLink ? _react2.default.createElement(_BaseLink2.default, { href: this.props.titleLink, children: this.props.title }) : this.props.title
      );
    }
  }, {
    key: 'renderSearchbar',
    value: function renderSearchbar() {
      var _this2 = this;

      if (!this.props.searchbar) return null;
      if (this.props.title) {
        console.warn('Cannot have title and searchbar - there\'s not enough space!');
        return null;
      }
      return _react2.default.createElement(
        'div',
        { className: 'rx-navbar__searchbar' },
        _react2.default.createElement(
          'button',
          { className: 'rx-navbar__searchbar-toggle', onClick: this.toggleSearchbarMobileVisible },
          _react2.default.createElement(_Icon2.default, { variant: 'search' })
        ),
        _react2.default.createElement(_Searchbar2.default, _extends({
          placeholder: 'Search for a company...',
          notFoundText: 'Company not in search results?'
        }, this.props.searchbarConfig, {
          onResultClick: function onResultClick(c) {
            _this2.setState({ visible: null });
            _this2.props.searchbarConfig.onResultClick(c);
          }
        }))
      );
    }
  }, {
    key: 'renderMenu',
    value: function renderMenu() {
      return _react2.default.createElement(
        'div',
        { className: 'rx-navbar__menu' },
        _react2.default.createElement(
          'button',
          { className: 'rx-navbar__menu-toggle', onClick: this.toggleMenuMobileVisible },
          _react2.default.createElement('span', { className: 'rx-icon rx-icon--menu-toggle' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'rx-navbar__links' },
          this.props.children
        )
      );
    }
  }, {
    key: 'renderInner',
    value: function renderInner() {
      return _react2.default.createElement(
        'div',
        { className: 'rx-navbar__inner' },
        this.renderLogo(),
        this.renderTitle(),
        this.renderSearchbar(),
        this.renderMenu()
      );
    }
  }, {
    key: 'renderContainer',
    value: function renderContainer() {
      return _react2.default.createElement(
        _Container2.default,
        null,
        this.renderInner()
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var className = (0, _classnames2.default)('rx-navbar', _defineProperty({
        'rx-navbar--fixed': this.props.fixed
      }, 'rx-navbar--' + this.state.visible + '-visible', this.state.visible));
      return _react2.default.createElement(
        'nav',
        { className: className, onClick: this.onBackgroundClicked },
        this.props.fullWidth ? this.renderInner() : this.renderContainer()
      );
    }
  }, {
    key: 'searchbarMobileVisible',
    get: function get() {
      return this.state.visible === 'searchbar';
    }
  }, {
    key: 'menuMobileVisible',
    get: function get() {
      return this.state.visible === 'menu';
    }
  }]);

  return Navbar;
}(_react.PureComponent);

Navbar.defaultProps = DEFAULT_PROPS;


function NavbarLink(_ref4) {
  var children = _ref4.children,
      imageUrl = _ref4.imageUrl,
      active = _ref4.active,
      rest = _objectWithoutProperties(_ref4, ['children', 'imageUrl', 'active']);

  var className = (0, _classnames2.default)('rx-navbar__link', {
    'rx-navbar__link--active': active
  });
  if (imageUrl) {
    return _react2.default.createElement(
      _BaseLink2.default,
      _extends({ className: className }, rest),
      _react2.default.createElement('img', { src: imageUrl }),
      _react2.default.createElement(
        'span',
        null,
        children
      )
    );
  }
  return _react2.default.createElement(
    _BaseLink2.default,
    _extends({ className: className }, rest),
    children
  );
}

function NavbarDropdown(_ref5) {
  var noChevron = _ref5.noChevron,
      icon = _ref5.icon,
      title = _ref5.title,
      children = _ref5.children;

  var customIcon = icon ? _react2.default.createElement(_Icon2.default, { variant: icon }) : null;
  var chevron = noChevron ? null : _react2.default.createElement(_Icon2.default, { variant: 'chevron-down' });
  return _react2.default.createElement(
    'div',
    { className: 'rx-navbar__link rx-navbar__link--dropdown' },
    _react2.default.createElement(
      'div',
      { className: 'rx-navbar__dropdown' },
      _react2.default.createElement(
        'button',
        { className: 'rx-navbar__dropdown-toggle' },
        customIcon,
        ' ',
        title,
        ' ',
        chevron
      ),
      _react2.default.createElement(
        'div',
        { className: 'rx-navbar__links' },
        children
      )
    )
  );
}

function NavbarLinkGroup(_ref6) {
  var title = _ref6.title,
      children = _ref6.children;

  return _react2.default.createElement(
    'div',
    { className: 'rx-navbar__link-group' },
    _react2.default.createElement(
      'div',
      { className: 'rx-navbar__link-group-title' },
      title
    ),
    children
  );
}

Navbar.Link = NavbarLink;
Navbar.LinkGroup = NavbarLinkGroup;
Navbar.Dropdown = NavbarDropdown;

exports.default = Navbar;