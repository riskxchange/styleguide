'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Table = function (_PureComponent) {
  _inherits(Table, _PureComponent);

  function Table(props) {
    _classCallCheck(this, Table);

    var _this = _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).call(this, props));

    _this.getRow = _this.getRow.bind(_this);
    return _this;
  }

  _createClass(Table, [{
    key: 'getRow',
    value: function getRow(row, i) {
      return _react2.default.createElement(
        'tr',
        { key: i },
        this.headerKeys.map(function (key, i) {
          return _react2.default.createElement(
            'td',
            { key: key },
            row[key]
          );
        })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'table',
        { className: 'rx-table' },
        this.tableHeader,
        this.tableBody
      );
    }
  }, {
    key: 'autoHeader',
    get: function get() {
      return this.props.data.reduce(function (acc, row) {
        return acc.concat(Object.keys(row));
      }, []).reduce(function (acc, key) {
        return acc.includes(key) ? acc : acc.concat(key);
      }, []);
    }
  }, {
    key: 'headerText',
    get: function get() {
      return this.props.header ? this.props.header.map(function (h) {
        return h.text;
      }) : this.autoHeader;
    }
  }, {
    key: 'headerKeys',
    get: function get() {
      return this.props.header ? this.props.header.map(function (h) {
        return h.key;
      }) : this.autoHeader;
    }
  }, {
    key: 'tableHeader',
    get: function get() {
      var cells = this.headerText.map(function (h, i) {
        return _react2.default.createElement(
          'th',
          { key: i },
          h
        );
      });
      return _react2.default.createElement(
        'thead',
        null,
        _react2.default.createElement(
          'tr',
          null,
          cells
        )
      );
    }
  }, {
    key: 'tableBody',
    get: function get() {
      return _react2.default.createElement(
        'tbody',
        null,
        this.props.data.map(this.getRow)
      );
    }
  }]);

  return Table;
}(_react.PureComponent);

exports.default = Table;