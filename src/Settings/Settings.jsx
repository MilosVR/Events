import React from 'react'
import {Grid} from 'semantic-ui-react';
import {Route, Switch, Redirect} from 'react-router-dom'
import SettingsNav from './SettingsNav';


import BasicPage from './BasicPage'
import About from './About'
import Photos from './Photos'
import Account from './Account'

const Settings = (props) => {
  return (
    <Grid>
      <Grid.Column width={12}>
        <Switch>
          <Redirect exact from='/settings' to='/settings/basic'/>
          <Route path='/settings/basic' component={BasicPage}/>
          <Route path='/settings/about' component={About}/>
          <Route path='/settings/photos' component={Photos}/>
          <Route path='/settings/account' component={Account}/>
        </Switch>
      </Grid.Column>
      <Grid.Column width={4}>
      <SettingsNav/>
      </Grid.Column>
      
    </Grid>
  )
}

export default Settings
