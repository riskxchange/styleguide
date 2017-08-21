'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Modal = function (_PureComponent) {
  _inherits(Modal, _PureComponent);

  function Modal(props) {
    _classCallCheck(this, Modal);

    var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, props));

    _this.onCloseHandler = _this.onCloseHandler.bind(_this);
    return _this;
  }

  _createClass(Modal, [{
    key: 'onCloseHandler',
    value: function onCloseHandler(e) {
      this.props.onClose(e);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: this.className },
        _react2.default.createElement(
          'div',
          { className: 'rx-modal__container' },
          _react2.default.createElement(
            'div',
            { className: 'rx-modal__body' },
            this.closeBtn,
            this.title,
            this.children
          ),
          this.footer
        )
      );
    }
  }, {
    key: 'title',
    get: function get() {
      if (!this.props.title) return null;
      return _react2.default.createElement(
        'div',
        { className: 'rx-modal__title' },
        this.props.title
      );
    }
  }, {
    key: 'closeBtn',
    get: function get() {
      return _react2.default.createElement(
        'button',
        { className: 'rx-modal__close-btn', onClick: this.onCloseHandler },
        _react2.default.createElement(_Icon2.default, { name: 'cross' })
      );
    }
  }, {
    key: 'footer',
    get: function get() {
      if (!this.props.footer) return null;
      return _react2.default.createElement('div', { className: 'rx-modal__footer', children: this.props.footer });
    }
  }, {
    key: 'className',
    get: function get() {
      return (0, _classnames2.default)('rx-modal', {
        'rx-modal--active': this.props.open
      });
    }
  }]);

  return Modal;
}(_react.PureComponent);

exports.default = Modal;