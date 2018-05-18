'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Navbar = require('./Navbar');

var _Navbar2 = _interopRequireDefault(_Navbar);

var _jsonRequest = require('../utils/json-request');

var _logError = require('../utils/log-error');

var _logError2 = _interopRequireDefault(_logError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AppNavbar = function (_PureComponent) {
  _inherits(AppNavbar, _PureComponent);

  function AppNavbar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AppNavbar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AppNavbar.__proto__ || Object.getPrototypeOf(AppNavbar)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      searchResults: []
    }, _this.fetchSearchResults = function (query) {
      (0, _jsonRequest.getJSON)('/api/search?q=' + query).then(function (companies) {
        return companies.map(function (company) {
          return {
            id: company.id,
            imageUrl: company.logoUrl + '?w=64',
            title: company.name
          };
        }).splice(0, 4);
      }).then(function (searchResults) {
        return _this.setState({ searchResults: searchResults });
      }).catch(_logError2.default);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AppNavbar, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (this.props.fetchData) return this.fetchData();
      this.setStateWithProps(this.props);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.fetchData !== nextProps.fetchData) return this.fetchData();
      this.setStateWithProps(nextProps);
    }
  }, {
    key: 'fetchData',
    value: function fetchData(props) {
      var _this2 = this;

      (0, _jsonRequest.getJSON)('/api/me').then(function (user) {
        return Promise.all([_this2.fetchApps(user.companyId), _this2.setState({
          companies: user.companies
        })]);
      });
    }
  }, {
    key: 'setStateWithProps',
    value: function setStateWithProps(props) {
      this.setState(function (state) {
        return {
          apps: props.apps || state.apps,
          companies: props.companies || state.companies
        };
      });
    }
  }, {
    key: 'fetchApps',
    value: function fetchApps(cid) {
      var _this3 = this;

      (0, _jsonRequest.getJSON)('/api/companies/' + cid + '/apps').then(function (apps) {
        return _this3.setState({ apps: apps });
      }).catch(_logError2.default);
    }
  }, {
    key: 'renderApps',
    value: function renderApps() {
      var apps = this.props.apps || this.state.apps;
      if (!apps) return _react2.default.createElement(_Navbar2.default.Link, { children: 'Loading...' });
      if (!apps.length) return _react2.default.createElement(_Navbar2.default.Link, { children: 'Coming soon...' });
      return apps.map(function (app) {
        return _react2.default.createElement(
          _Navbar2.default.Link,
          { key: app.link, href: app.link, imageUrl: app.imageUrl },
          app.title
        );
      });
    }
  }, {
    key: 'renderCompanies',
    value: function renderCompanies() {
      if (!this.state.companies) return null;
      var links = this.state.companies.map(function (c) {
        return _react2.default.createElement(
          _Navbar2.default.Link,
          { key: c.id, imageUrl: c.logoUrl, href: '/c/' + c.slug },
          c.name
        );
      });
      return _react2.default.createElement(_Navbar2.default.LinkGroup, { title: 'My Companies', children: links });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _Navbar2.default,
        {
          fullWidth: this.props.fullWidth,
          fixed: this.props.fixed,
          searchbar: this.props.searchbar,
          title: this.props.title,
          titleLink: this.props.titleLink,
          searchbarConfig: this.searchbarConfig },
        _react2.default.createElement(
          _Navbar2.default.Dropdown,
          { title: 'Apps', icon: 'app-menu', noChevron: true },
          this.renderApps()
        ),
        _react2.default.createElement(
          _Navbar2.default.Dropdown,
          { title: 'My Account' },
          _react2.default.createElement(
            _Navbar2.default.Link,
            { href: '/settings' },
            'Account settings'
          ),
          _react2.default.createElement(
            _Navbar2.default.Link,
            { href: '/logout' },
            'Logout'
          ),
          this.renderCompanies()
        )
      );
    }
  }, {
    key: 'searchbarConfig',
    get: function get() {
      var _this4 = this;

      if (this.props.searchbar) {
        return {
          onChange: this.fetchSearchResults,
          results: this.state.searchResults,
          disableNotFound: true,
          onResultClick: function onResultClick(c) {
            return _this4.props.goTo('/c/' + (c.slug || c.id));
          }
        };
      }
      return null;
    }
  }]);

  return AppNavbar;
}(_react.PureComponent);

AppNavbar.defaultProps = {
  fixed: false,
  fullWidth: false,
  searchbar: false,
  title: null,
  goTo: function goTo(url) {
    window.location.href = url;
  },
  // if fetchData is true, we call API automatically
  fetchData: false,
  // if fetchData is false, we expect the user to pass these values in
  companies: null,
  apps: null
};
exports.default = AppNavbar;