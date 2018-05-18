import React, {Component} from 'react'
import Input from './Input'
import Icon from './Icon'
import cx from 'classnames'

export default class Searchbar extends Component {
  state = {
    query: '',
    selectedResult: null,
    showResults: true
  }
  search = (e) => {
    const query = e.target.value
    this.setState({ query, selectedResult: null })
    this.props.onChange(query)
  }
  onClick = (result) => {
    if (this.props.onResultClick) this.props.onResultClick(result)
    return this.setState((state) => {
      const newState = Object.assign({}, state, { showResults: false })
      if (this.props.updateQueryOnClick) {
        newState.query = result.title
        newState.selectedResult = result
      }
      return newState
    })
  }
  onNotFoundClick = () => {
    this.setState({ showResults: false })
    if (this.props.onNotFoundClick) this.props.onNotFoundClick(this.state.query)
  }
  renderResult = (result, i) => {
    if (this.state.selectedResult && this.state.selectedResult !== result) {
      return null
    }
    const {imageUrl, title, description} = result
    return (
      <div
        key={result.id || i}
        onClick={(e) => this.onClick(result)}
        className={cx('rx-searchbar-result', { 'rx-searchbar-result--no-image': !imageUrl })}>
        {imageUrl ? <img src={imageUrl} alt='' className='rx-searchbar-result__thumbnail' /> : null}
        <div className='rx-searchbar-result__title'>{title}</div>
        <div className='rx-searchbar-result__descrption'>{description}</div>
      </div>
    )
  }
  renderResults () {
    if (!this.props.results || !this.props.results.length) return null
    return this.props.results.map(this.renderResult)
  }
  renderNotFound () {
    if (this.props.disableNotFound) return
    const DEFAULT_MESSAGE = "Can't find what you're looking for?"
    return (
      <div
        onClick={this.onNotFoundClick}
        className='rx-searchbar-result rx-searchbar-result--not-found' >
        {this.props.notFoundText || DEFAULT_MESSAGE}
      </div>
    )
  }
  renderResultsContainer () {
    if (!this.state.query) return null
    if (!this.state.showResults) return null
    return (
      <div className='rx-searchbar__results'>
        {this.renderResults()}
        {this.renderNotFound()}
      </div>
    )
  }
  render () {
    return (
      <div className='rx-searchbar'>
        <Icon name='search' className='rx-searchbar__icon' />
        <Input
          blocked
          className='rx-searchbar__input'
          placeholder={this.props.placeholder || 'Search...'}
          value={this.state.query}
          spellCheck={false}
          onFocus={() => this.setState({ showResults: true })}
          onChange={this.search} />
        {this.renderResultsContainer()}
      </div>
    )
  }
}

/*
<Searchbar
  onChange={}
  results=[]
  notFoundText=''
  onResultClick={}
  onNotFoundClick={}
  updateQueryOnClick />
*/
