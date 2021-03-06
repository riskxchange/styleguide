import React, {PureComponent} from 'react'
import {render} from 'react-dom'
import {
  Container, Row, Column, Card, Form, Field, Input, RadioGroup,
  FormActions, Button, Modal, Select, Notice, Loader, InputGroup, Table,
  Breadcrumb, Menu, ErrorPage, Grade, Searchbar, AppNavbar
} from '../react'

// global.BaseLink = (props) => <a {...props} href='/fake'>{props.children}</a>

const RADIO_ITEMS = [
  { text: 'Yes', value: 'yes', selected: true },
  { text: 'No', value: 'no' }
]
const SELECT_ITEMS = [
  { text: 'Apple', value: 'a', selected: true },
  { text: 'Orange', value: 'o' },
  { text: 'Banana', value: 'b' }
]
const TABLE_DATA = [{
  fruit: 'apple',
  grade: <Grade>A</Grade>,
  price: '0.40'
}, {
  fruit: 'banana',
  grade: <Grade>C</Grade>,
  price: '0.20'
}, {
  fruit: 'strawberry',
  grade: <Grade>F</Grade>,
  price: '1.43'
}]

class App extends PureComponent {
  constructor (props) {
    super(props)
    this.state = { modalOpen: false, results: [] }
    this.toggleModal = this.toggleModal.bind(this)
    this.showNotice = this.showNotice.bind(this)
    this.hideNotice = this.hideNotice.bind(this)
  }
  toggleModal () {
    console.log('--> toggle')
    this.setState((state) => ({ ...state, modalOpen: !state.modalOpen }))
  }
  get notice () {
    if (this.state.showNotice) {
      return <Notice icon='tick' text='I am a notice' variant='success' />
    }
    return null
  }
  showNotice () {
    this.setState((state) => ({ ...state, showNotice: true }))
  }
  hideNotice () {
    this.setState((state) => ({ ...state, showNotice: false }))
  }
  get form () {
    return (
      <Card footer='I am the footer!'>
        <Form title='Example form'>
          {this.notice}
          <Field label='Full name' tooltip='I am the tooltop'>
            <Input name='full_name' placeholder='e.g. John Smith' />
          </Field>
          <Field label='What is your daily rate?' tooltip='I am the tooltop too!!' info='Cash money...'>
            <InputGroup boxPosition='left' type='number' boxText='£' placeholder='0.00' />
          </Field>
          <Field label='Do you like apples?' info='Apples are an amazing fruit, that can be used to make cider.'>
            <RadioGroup name='like_apples' options={RADIO_ITEMS} />
          </Field>
          <Field label='Select something'>
            <Select name='like_apples' options={SELECT_ITEMS} />
          </Field>
          <FormActions>
            <Button variant='primary' onClick={this.showNotice}>Submit</Button>
            <Button onClick={this.hideNotice}>Cancel</Button>
          </FormActions>
        </Form>
      </Card>
    )
  }
  get modal () {
    return (
      <div>
        <Button variant='primary' blocked onClick={this.toggleModal}>
          Click to open modal
        </Button>
        <Modal
          active={this.state.modalOpen}
          onClose={this.toggleModal}>
          <Modal.Header>TITLE</Modal.Header>
          <Modal.Body>This is the modal body</Modal.Body>
          <Modal.Footer>I am the footer</Modal.Footer>
        </Modal>
      </div>
    )
  }
  get loaders () {
    return (
      <Row>
        <Column sm={6}>
          <Card>
            <Loader />
          </Card>
        </Column>
        <Column sm={6}>
          <Card>
            <Loader bg />
          </Card>
        </Column>
      </Row>
    )
  }
  get table () {
    const header = [
      { key: 'fruit', text: 'Fruit' },
      { key: 'price', text: 'Price (£)' },
      { key: 'grade', text: 'Grade' }
    ]
    return (
      <Container>
        <Card>
          <Table data={TABLE_DATA} header={header} />
        </Card>
      </Container>
    )
  }
  get data () {
    return JSON.stringify(this.state, null, 2)
  }
  get error () {
    return (
      <div style={{paddingTop: '20px'}}>
        <ErrorPage message='What the fudge!' eventId='123' />
      </div>
    )
  }
  get search () {
    return (
      <div className='rx-utils--vertical-space'>
        <Searchbar
          results={this.state.results}
          notFoundText='NOTHING FOUND?'
          updateQueryOnClick
          onChange={(query) => {
            this.setState(({results}) => ({
              results: results.length ? [] : [{
                title: `Test ${query}`,
                imageUrl: 'https://riskxchange.imgix.net/logos/default-logo.png'
              }]
            }))
          }}
        />
      </div>
    )
  }
  toggleNavbar = () => {
    this.setState(state => {
      const showReactNavbar = !state.showReactNavbar
      if (showReactNavbar) {
        document.querySelector('#default-navbar').style = 'display: none;'
        document.querySelector('#react-navbar').style = 'display: block;'
      } else {
        document.querySelector('#react-navbar').style = 'display: none;'
        document.querySelector('#default-navbar').style = 'display: block;'
      }
      return { ...state, showReactNavbar: !state.showReactNavbar }
    })
  }
  renderToggleNavbarButton () {
    const text = `Click to ${this.state.showReactNavbar ? 'show' : 'hide'} AppNavbar`
    return (
      <div className='rx-utils--vertical-space'>
        <Button variant='default' blocked onClick={this.toggleNavbar}>{text}</Button>
      </div>
    )
  }
  render () {
    return (
      <div>
        <Breadcrumb>
          <Breadcrumb.Link href='#'>Food</Breadcrumb.Link>
          <Breadcrumb.Link href='#'>Fruit</Breadcrumb.Link>
          <Breadcrumb.Link href='#'>Banana</Breadcrumb.Link>
        </Breadcrumb>
        <Row>
          <Column md={3}>
            <Menu>
              <Menu.Item href='#'>Apple</Menu.Item>
              <Menu.Item href='#'>Banana</Menu.Item>
              <Menu.Item active>Carrot</Menu.Item>
            </Menu>
            <br />
            {this.modal}
            {this.renderToggleNavbarButton()}
          </Column>
          <Column md={6}>
            {this.form}
            <Card className='rx-utils--vertical-space'>
              <h2>Search</h2>
              {this.search}
            </Card>
          </Column>
          <Column md={3}>
            <pre>{this.data}</pre>
          </Column>
        </Row>
        {this.loaders}
        {this.table}
        {this.error}
      </div>
    )
  }
}

render(<App />, document.querySelector('#react-demo'))
render(<AppNavbar fetchData searchbar fullWidth fixed />, document.querySelector('#react-navbar'))
