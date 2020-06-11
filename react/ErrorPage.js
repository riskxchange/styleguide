'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ErrorPage;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _EmailLink = require('./EmailLink');

var _EmailLink2 = _interopRequireDefault(_EmailLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULT_ERROR_MSG = 'An unknown error occured';

function ErrorPage(_ref) {
  var eventId = _ref.eventId;

  var ref = typeof eventId === 'string' ? '' + eventId : '';
  var errorMessage = ref ? _react2.default.createElement(
    'span',
    null,
    'Error reference ',
    _react2.default.createElement(
      'b',
      null,
      ref
    )
  ) : null;
  return _react2.default.createElement(
    'div',
    { className: 'rx-error-page rx-container' },
    _react2.default.createElement(
      'div',
      { className: 'rx-grid' },
      _react2.default.createElement(
        'div',
        { className: 'rx-col--md-6 rx-col--md-offset-3' },
        _react2.default.createElement(
          'div',
          { className: 'rx-card' },
          _react2.default.createElement(
            'h1',
            null,
            'Oops... Something went wrong'
          ),
          _react2.default.createElement(
            'p',
            null,
            'Our development team has been notified.'
          ),
          _react2.default.createElement(
            'p',
            null,
            'For support on this error, please contact ',
            _react2.default.createElement(
              _EmailLink2.default,
              { subject: 'Error Ref: ' + (ref || 'N/A') },
              'support@riskxchange.co'
            ),
            ' ',
            errorMessage
          )
        )
      )
    )
  );
}