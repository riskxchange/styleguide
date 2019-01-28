'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getJSON = getJSON;
exports.postJSON = postJSON;
exports.putJSON = putJSON;
exports.deleteJSON = deleteJSON;
/* globals fetch */

function getJSON(url) {
  return fetch(url, {
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }).then(onResponse);
}

function postJSON(url, data) {
  return fetch(url, {
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(data)
  }).then(onResponse);
}

function putJSON(url, data) {
  return fetch(url, {
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'PUT',
    body: JSON.stringify(data)
  }).then(onResponse);
}

function deleteJSON(url) {
  return fetch(url, {
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'DELETE'
  }).then(onResponse);
}

function onResponse(res) {
  return res.json().then(function (json) {
    if (res.ok) return json;
    var err = new Error(json.message);
    err.status = res.status;
    if (res.status === 401) {
      window.location.href = '/login';
    }
    throw err;
  });
}