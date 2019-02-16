import React, { Component } from 'react'
import { Menu, Header, Grid } from 'semantic-ui-react'
import {NavLink} from 'react-router-dom'

export default class SettingsNav extends Component {
  render() {
    return (
      <Grid.Column width={4}>
      <Menu pointing vertical>
        <Header attached content='Settings' inverted/>
        <Menu.Item as={NavLink} to='/settings/basic'>Basic</Menu.Item>
        <Menu.Item as={NavLink} to='/settings/about'>About me</Menu.Item>
        <Menu.Item as={NavLink} to='/settings/photos'>Photos</Menu.Item>
      </Menu> 
      <br/>
      <Menu pointing vertical>
      <Header attached content='Account Settings' inverted/>
      <Menu.Item as={NavLink} to='/settings/account'>My Account</Menu.Item>
    </Menu> 
    </Grid.Column>
    )
  }
}
