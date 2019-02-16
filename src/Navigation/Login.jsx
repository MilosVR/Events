import React, {Component} from 'react'
import {Button, Menu, Modal, Form, Checkbox, Reveal, Message} from 'semantic-ui-react'



export const emptyField={
  firstName:'',
  lastName:'',
  username:'',
  password:'',
  repeatPassword:''
}
export default class SignOut extends Component {

  state={
    formField:emptyField
  }

  onInputChange=(e)=>{
    const allFields = this.state.formField
    allFields[e.target.name]=e.target.value
    this.setState({
      formField:allFields
    })
  }
  onRegisterSubmit=(e)=>{
    e.preventDefault()
   
    if (this.state.formField.username.length>=5 && this.state.formField.password!=='' && 
        this.state.formField.password===this.state.formField.repeatPassword) {
        this.props.signIn(this.state.formField.username) 
    }
  }
  onLoginSubmit=(e)=>{
    e.preventDefault()
   
    if (this.state.formField.username.length>=5 && this.state.formField.password!=='') {
        this.props.signIn(this.state.formField.username) 
    }
  }
  render() {
    return (
      <Menu.Item position='right'>
        <Modal size='mini' trigger={< Button style={{marginRight:'10px'}}  inverted > <b>Login</b></Button>}>
          <Modal.Header
            style={{
            background: 'DodgerBlue ',
            textAlign: 'center',
            color: 'white',
            fontFamily: 'Georgia, serif',
            fontSize: '22px'
          }}>Heisenberg®
          </Modal.Header>
          <Modal.Content className='loginModal'>
            <Form onSubmit={this.onLoginSubmit} error>
              <Form.Field>
                <label>Username</label>
                <input 
                name='username'
                onChange={this.onInputChange}
                value={this.state.formField.username}
                placeholder='First Name'
                />
                {this.state.formField.username && this.state.formField.username.length<5 && <Message
                  error
                  header='Action Forbidden'
                  content='The username needs to be at least 5 characters long'
                />}
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input 
                onChange={this.onInputChange}
                value={this.state.formField.password}
                name='password'
                type='password'
                />
              </Form.Field>
              <Form.Field>
                <Checkbox label='I agree to the Terms and Conditions'/>
              </Form.Field>
              <Reveal animated='move'>
                <Reveal.Content visible>
                  <Button  content='Already have account?' color='orange'/>
                </Reveal.Content>
                <Reveal.Content hidden>
                  <Button  content='Login'  color='blue'/>
                </Reveal.Content>
              </Reveal>
            </Form>
          </Modal.Content>
  
        </Modal>
        <Modal size='mini' trigger={< Button  inverted > <b>Register</b></Button>}>
          <Modal.Header
            style={{
            background: 'DodgerBlue ',
            textAlign: 'center',
            color: 'white',
            fontFamily: 'Georgia, serif',
            fontSize: '22px'
          }}>Heisenberg®
          </Modal.Header>
          <Modal.Content>
            <Form onSubmit={this.onRegisterSubmit} error>
            <Form.Field>
                <label>First Name</label>
                <input 
                name='firstName'
                onChange={this.onInputChange}
                value={this.state.formField.firstName}
                placeholder='First Name'
                />
          </Form.Field>
          <Form.Field>
                <label>Last Name</label>
                <input 
                name='lastName'
                onChange={this.onInputChange}
                value={this.state.formField.lastName}
                placeholder='Last Name'
                />
          </Form.Field>
              <Form.Field>
                <label>Username</label>
                <input 
                name='username'
                onChange={this.onInputChange}
                value={this.state.formField.username}
                placeholder='First Name'
                />
                {this.state.formField.username && this.state.formField.username.length<5 && <Message
                  error
                  header='Action Forbidden'
                  content='The username needs to be at least 5 characters long'
                />}
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input 
                onChange={this.onInputChange}
                value={this.state.formField.password}
                name='password'
                type='password'
                />
              </Form.Field>
              <Form.Field>
                <label>Repeat password</label>
                <input 
                onChange={this.onInputChange}
                value={this.state.formField.repeatPassword}
                name='repeatPassword'
                type='password'
                />
                {this.state.formField.repeatPassword && this.state.formField.password !== this.state.formField.repeatPassword && <Message
                  error
                  header='Action Forbidden'
                  content='Password not match'
                />}
              </Form.Field>
              <Form.Field>
                <Checkbox label='I agree to the Terms and Conditions'/>
              </Form.Field>
              <Reveal animated='move'>
                <Reveal.Content visible>
                  <Button  content='Already have account?' color='orange'/>
                </Reveal.Content>
                <Reveal.Content hidden>
                  <Button  content='Login'  color='blue'/>
                </Reveal.Content>
              </Reveal>
            </Form>
          </Modal.Content>
        </Modal>
      </Menu.Item>
    )
  }
}
