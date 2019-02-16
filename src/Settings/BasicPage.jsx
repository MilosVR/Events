import React, { Component } from 'react'
import { Form, Segment, Header, Button } from 'semantic-ui-react'

const options = [
  { key: 'y', text: 'Yes', value: 'Yes' },
  { key: 'n', text: 'No', value: 'No' },
]

class BasicPage extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
      <Segment>
        <Header as='h2' style={{marginTop:'5px'}}>
          <Header.Content>
            Basic Info
          </Header.Content>
        </Header>
        <hr style={{color:'silver'}}></hr>
        <Form style={{marginTop:'20px'}}>
        <Form.Group widths='equal'>
          <Form.Input fluid label='First name' placeholder='First name' />
          <Form.Input fluid label='Last name' placeholder='Last name' />
          
        </Form.Group>
        <Form.Group inline >
          <label>Gender</label>
          <Form.Radio
            label='Male'
            value='male'
            checked={value === 'male'}
            onChange={this.handleChange}
          />
          <Form.Radio
            label='Female'
            value='female'
            checked={value === 'female'}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Select  fluid label='Employed' options={options} placeholder='Employed' />
        <Form.TextArea label='Tell us more about your job' placeholder='Tell us more about you...' />
        <Form.Checkbox label='I agree to the Terms and Conditions' />
        <Button.Group style={{marginTop:'20px'}}>
        <Form.Button style={{marginRight:'10px'}}>Cancel</Form.Button>
        <Form.Button color='green'>Update</Form.Button>
        </Button.Group>
      </Form>
      </Segment>
    )
  }
}

export default BasicPage