'use strict';

var fs = require('fs');
var path = require('path');

function getComponents() {
  return fs.readdirSync(path.resolve(__dirname, './components')).filter(function (file) {
    return file.match(/\.js$/);
  }).map(function (file) {
    return file.match(/(.*)\.js$/)[1];
  });
}

function getImportStatements() {
  return getComponents().map(function (component) {
    return 'import ' + component + ' from \'./components/' + component + '\'';
  }).join('\n');
}

function getExportStatement() {
  return 'export {\n' + getComponents().map(function (v) {
    return '  ' + v;
  }).join(',\n') + '\n}\n';
}

var template = getImportStatements() + '\n\n' + getExportStatement();

fs.writeFileSync(path.resolve(__dirname, './index.js'), template);
console.log('--> rebuilt src/index.js');