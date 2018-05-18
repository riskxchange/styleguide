'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Input = require('./Input');

var _Input2 = _interopRequireDefault(_Input);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Searchbar = function (_Component) {
  _inherits(Searchbar, _Component);

  function Searchbar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Searchbar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Searchbar.__proto__ || Object.getPrototypeOf(Searchbar)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      query: '',
      selectedResult: null,
      showResults: true
    }, _this.search = function (e) {
      var query = e.target.value;
      _this.setState({ query: query, selectedResult: null });
      _this.props.onChange(query);
    }, _this.onClick = function (result) {
      if (_this.props.onResultClick) _this.props.onResultClick(result);
      return _this.setState(function (state) {
        var newState = Object.assign({}, state, { showResults: false });
        if (_this.props.updateQueryOnClick) {
          newState.query = result.title;
          newState.selectedResult = result;
        }
        return newState;
      });
    }, _this.onNotFoundClick = function () {
      _this.setState({ showResults: false });
      if (_this.props.onNotFoundClick) _this.props.onNotFoundClick(_this.state.query);
    }, _this.renderResult = function (result, i) {
      if (_this.state.selectedResult && _this.state.selectedResult !== result) {
        return null;
      }
      var imageUrl = result.imageUrl,
          title = result.title,
          description = result.description;

      return _react2.default.createElement(
        'div',
        {
          key: result.id || i,
          onClick: function onClick(e) {
            return _this.onClick(result);
          },
          className: (0, _classnames2.default)('rx-searchbar-result', { 'rx-searchbar-result--no-image': !imageUrl }) },
        imageUrl ? _react2.default.createElement('img', { src: imageUrl, alt: '', className: 'rx-searchbar-result__thumbnail' }) : null,
        _react2.default.createElement(
          'div',
          { className: 'rx-searchbar-result__title' },
          title
        ),
        _react2.default.createElement(
          'div',
          { className: 'rx-searchbar-result__descrption' },
          description
        )
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Searchbar, [{
    key: 'renderResults',
    value: function renderResults() {
      if (!this.props.results.length) return null;
      return this.props.results.map(this.renderResult);
    }
  }, {
    key: 'renderNotFound',
    value: function renderNotFound() {
      if (this.props.disableNotFound) return;
      var DEFAULT_MESSAGE = "Can't find what you're looking for?";
      return _react2.default.createElement(
        'div',
        {
          onClick: this.onNotFoundClick,
          className: 'rx-searchbar-result rx-searchbar-result--not-found' },
        this.props.notFoundText || DEFAULT_MESSAGE
      );
    }
  }, {
    key: 'renderResultsContainer',
    value: function renderResultsContainer() {
      if (!this.state.query) return null;
      if (!this.state.showResults) return null;
      return _react2.default.createElement(
        'div',
        { className: 'rx-searchbar__results' },
        this.renderResults(),
        this.renderNotFound()
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'rx-searchbar' },
        _react2.default.createElement(_Icon2.default, { name: 'search', className: 'rx-searchbar__icon' }),
        _react2.default.createElement(_Input2.default, {
          blocked: true,
          className: 'rx-searchbar__input',
          placeholder: this.props.placeholder || 'Search...',
          value: this.state.query,
          spellCheck: false,
          onFocus: function onFocus() {
            return _this2.setState({ showResults: true });
          },
          onChange: this.search }),
        this.renderResultsContainer()
      );
    }
  }]);

  return Searchbar;
}(_react.Component);

/*
<Searchbar
  onChange={}
  results=[]
  notFoundText=''
  onResultClick={}
  onNotFoundClick={}
  updateQueryOnClick />
*/


exports.default = Searchbar;