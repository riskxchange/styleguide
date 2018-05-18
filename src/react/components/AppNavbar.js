import React, {PureComponent} from 'react'
import Navbar from './Navbar'
import {getJSON} from '../../utils/json-request'
import logError from '../../utils/log-error'

export default class AppNavbar extends PureComponent {
  static defaultProps = {
    fixed: false,
    fullWidth: false,
    searchbar: false,
    title: null,
    goTo: (url) => { window.location.href = url },
    // if fetchData is true, we call API automatically
    fetchData: false,
    // if fetchData is false, we expect the user to pass these values in
    companies: null,
    apps: null
  }
  state = {
    searchResults: []
  }
  componentWillMount () {
    if (this.props.fetchData) return this.fetchData()
    this.setStateWithProps(this.props)
  }
  componentWillReceiveProps (nextProps) {
    if (this.props.fetchData !== nextProps.fetchData) return this.fetchData()
    this.setStateWithProps(nextProps)
  }
  fetchData (props) {
    getJSON(`/api/me`).then(user => Promise.all([
      this.fetchApps(user.companyId),
      this.setState({
        companies: user.companies
      })
    ]))
  }
  setStateWithProps (props) {
    this.setState((state) => ({
      apps: props.apps || state.apps,
      companies: props.companies || state.companies
    }))
  }
  fetchApps (cid) {
    getJSON(`/api/companies/${cid}/apps`)
      .then((apps) => this.setState({ apps }))
      .catch(logError)
  }
  fetchSearchResults = (query) => {
    getJSON(`/api/search?q=${query}`)
      .then((companies) => companies.map(company => ({
        id: company.id,
        imageUrl: company.logoUrl + '?w=64',
        title: company.name
      })).splice(0, 4))
      .then((searchResults) => this.setState({ searchResults }))
      .catch(logError)
  }
  renderApps () {
    const apps = this.props.apps || this.state.apps
    if (!apps) return <Navbar.Link children='Loading...' />
    if (!apps.length) return <Navbar.Link children='Coming soon...' />
    return apps.map(app => (
      <Navbar.Link key={app.link} href={app.link} imageUrl={app.imageUrl}>
        {app.title}
      </Navbar.Link>
    ))
  }
  renderCompanies () {
    if (!this.state.companies) return null
    const links = this.state.companies.map(c => (
      <Navbar.Link key={c.id} imageUrl={c.logoUrl} href={`/c/${c.slug}`}>{c.name}</Navbar.Link>
    ))
    return <Navbar.LinkGroup title='My Companies' children={links} />
  }
  get searchbarConfig () {
    if (this.props.searchbar) {
      return {
        onChange: this.fetchSearchResults,
        results: this.state.searchResults,
        disableNotFound: true,
        onResultClick: (c) => this.props.goTo(`/c/${c.slug || c.id}`)
      }
    }
    return null
  }
  render () {
    return (
      <Navbar
        fullWidth={this.props.fullWidth}
        fixed={this.props.fixed}
        searchbar={this.props.searchbar}
        title={this.props.title}
        titleLink={this.props.titleLink}
        searchbarConfig={this.searchbarConfig}>
        <Navbar.Dropdown title='Apps' icon='app-menu' noChevron>
          {this.renderApps()}
        </Navbar.Dropdown>
        <Navbar.Dropdown title='My Account'>
          <Navbar.Link href='/settings'>Account settings</Navbar.Link>
          <Navbar.Link href='/logout'>Logout</Navbar.Link>
          {this.renderCompanies()}
        </Navbar.Dropdown>
      </Navbar>
    )
  }
}
