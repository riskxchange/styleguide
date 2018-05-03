import React, {PureComponent} from 'react'
import {render} from 'react-dom'
import {
  Container, Row, Column, Card, Form, Field, Input, RadioGroup,
  FormActions, Button, Modal, Select, Notice, Loader, InputGroup, Table,
  Breadcrumb, Menu, ErrorPage
} from '../react'

const LINKS = [
  { text: 'Apple', href: '#' },
  { text: 'Banana', href: '#' },
  { text: 'Carrot', href: '#', active: true }
]
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
  color: 'green',
  price: '0.40'
}, {
  fruit: 'banana',
  color: 'yellow',
  price: '0.20'
}, {
  fruit: 'strawberry',
  color: 'red',
  price: '1.43'
}]

class App extends PureComponent {
  constructor (props) {
    super(props)
    this.state = { modalOpen: false }
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
          open={this.state.modalOpen}
          onClose={this.toggleModal}
          title='TITLE'
          footer='I am the footer'>
          This is the modal body
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
      { key: 'color', text: 'Colour' }
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
        <ErrorPage message='What the fudge!' sentry='123' />
      </div>
    )
  }
  render () {
    return (
      <div>
        <Breadcrumb links={LINKS} />
        <Row>
          <Column md={3}>
            <Menu links={LINKS} />
            <br />
            {this.modal}
          </Column>
          <Column md={6}>
            {this.form}
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
