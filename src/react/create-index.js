const fs = require('fs')
const path = require('path')

function getComponents () {
  return fs
    .readdirSync(path.resolve(__dirname, './components'))
    .filter((file) => file.match(/\.js$/))
    .map((file) => file.match(/(.*)\.js$/)[1])
}

function getImportStatements () {
  return getComponents()
    .map((component) => `import ${component} from './components/${component}'`)
    .join('\n')
}

function getExportStatement () {
  return 'export {\n' + getComponents().map((v) => `  ${v}`).join(',\n') + '\n}\n'
}

const template = getImportStatements() + '\n\n' + getExportStatement()

fs.writeFileSync(path.resolve(__dirname, './index.js'), template)
console.log('--> rebuilt src/index.js')
