'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _ModalHeader = require('./ModalHeader');

var _ModalHeader2 = _interopRequireDefault(_ModalHeader);

var _ModalBody = require('./ModalBody');

var _ModalBody2 = _interopRequireDefault(_ModalBody);

var _ModalFooter = require('./ModalFooter');

var _ModalFooter2 = _interopRequireDefault(_ModalFooter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Modal = function (_PureComponent) {
  _inherits(Modal, _PureComponent);

  function Modal() {
    _classCallCheck(this, Modal);

    return _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).apply(this, arguments));
  }

  _createClass(Modal, [{
    key: 'renderCloseBtn',
    value: function renderCloseBtn() {
      var cross = _react2.default.createElement('span', { className: 'rx-icon rx-icon--cross' });
      if (!this.props.onClose) {
        console.warn('Missing close button for modal. Should provide `closeLink` or `onClose` prop.');
      }
      return _react2.default.createElement('button', { className: 'rx-modal__close-btn', onClick: this.props.onClose, children: cross });
    }
  }, {
    key: 'render',
    value: function render() {
      var className = (0, _classnames2.default)('rx-modal', {
        'rx-modal--visible': this.props.active,
        'rx-modal--wide': this.props.wide,
        'rx-modal--scrollable': !this.props.noScroll
      }, this.props.className);
      return _react2.default.createElement(
        'div',
        { className: className },
        _react2.default.createElement(
          'div',
          { className: 'rx-modal__inner' },
          this.renderCloseBtn(),
          this.props.children
        )
      );
    }
  }]);

  return Modal;
}(_react.PureComponent);

Modal.Header = _ModalHeader2.default;
Modal.Body = _ModalBody2.default;
Modal.Footer = _ModalFooter2.default;

exports.default = Modal;