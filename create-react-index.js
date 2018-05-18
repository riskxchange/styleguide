const fs = require('fs')
const path = require('path')

function getComponents () {
  return fs
    .readdirSync(path.resolve(__dirname, './src/react'))
    .filter((file) => file !== 'index.js' && file.match(/\.js$/))
    .map((file) => file.match(/(.*)\.js$/)[1])
}

function getImportStatements () {
  return getComponents()
    .map((component) => `import ${component} from './${component}'`)
    .join('\n')
}

function getExportStatement () {
  return 'export {\n' + getComponents().map((v) => `  ${v}`).join(',\n') + '\n}\n'
}

const template = getImportStatements() + '\n\n' + getExportStatement()

fs.writeFileSync(path.resolve(__dirname, './src/react/index.js'), template)
console.log('--> rebuilt src/react/index.js')
