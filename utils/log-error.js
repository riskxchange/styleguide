"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = logError;
function logError(err) {
  var meta = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (window.Raven) {
    var sentry = window.Raven.captureException(err, _extends({}, meta));
    err.sentry = sentry;
  } else {
    console.warn(err, meta);
  }
  return err;
}