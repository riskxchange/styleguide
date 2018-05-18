import React, {PureComponent} from 'react'

export default class Table extends PureComponent {
  constructor (props) {
    super(props)
    this.getRow = this.getRow.bind(this)
  }
  get autoHeader () {
    return this.props.data
      .reduce((acc, row) => acc.concat(Object.keys(row)), [])
      .reduce((acc, key) => acc.includes(key) ? acc : acc.concat(key), [])
  }
  get headerText () {
    return this.props.header
      ? this.props.header.map((h) => h.text)
      : this.autoHeader
  }
  get headerKeys () {
    return this.props.header
      ? this.props.header.map((h) => h.key)
      : this.autoHeader
  }
  get tableHeader () {
    const cells = this.headerText.map((h, i) => (<th key={i}>{h}</th>))
    return <thead><tr>{cells}</tr></thead>
  }
  getRow (row, i) {
    return (
      <tr key={i}>
        {this.headerKeys.map((key, i) => (<td key={key}>{row[key]}</td>))}
      </tr>
    )
  }
  get tableBody () {
    return <tbody>{this.props.data.map(this.getRow)}</tbody>
  }
  render () {
    return (
      <table className='rx-table'>
        {this.tableHeader}
        {this.tableBody}
      </table>
    )
  }
}
