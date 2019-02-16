import React, {Component} from 'react'
import {Menu, Image, Dropdown, Message} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import './SignIn.css'

export default class SignIn extends Component {
  render() {
    return (
      <Menu.Item position='right'>
        <div
          className='fade-out'
          style={{
          position: 'fixed',
          right: '15px',
          bottom: '15px'
        }}>
          <Message
            className="box fade-in out"
            style={{
            background: 'green',
            color: 'white',
            height: '80px',
            borderRadius: '10px',
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: '16px'
          }}
            header='Success'
            content=' You are Logged to Heisenberg.com'/>
        </div>
        <Image avatar spaced='right' src='/assets/profilePic.png'/>
        <Dropdown pointing='top left' text={this.props.username} style= {{color:'white', fontWeight:'bold'}}>
          <Dropdown.Menu>
            <Dropdown.Item icon='edit' text='Edit Profile'/>
            <Dropdown.Item as={Link} to='settings' icon='settings' text='Settings'/>
            <Dropdown.Item icon='log out' text='Logout' onClick={this.props.signOut}/>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    )
  }
}
