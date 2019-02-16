import {Grid, Segment, Button, Icon} from 'semantic-ui-react'
import SimpleMap from './GoogleMapReact'
import React, { Component } from 'react';

class EventDetailedInfo extends Component {
  state={
    show:false
  }

  componentWillUnmount(){
    this.setState({
      show:false
    })
  }
  showMap = () => {
    this.setState(prevState => ({
      show: !prevState.show
    })
  )}
  render() {
    return (
        <Segment.Group>
       <Segment attached="top">
         <Grid verticalAlign="middle">
           <Grid.Column width={1}>
             <Icon size="large" color="teal" name="info" />
           </Grid.Column>
           <Grid.Column width={15}>
             <p>{this.props.events.description}</p>
           </Grid.Column>
         </Grid>
       </Segment>
       <Segment attached>
         <Grid verticalAlign="middle">
           <Grid.Column width={1}>
             <Icon name="calendar" size="large" color="teal" />
           </Grid.Column>
           <Grid.Column width={15}>
             <span>{this.props.events.date}</span>
           </Grid.Column>
         </Grid>
       </Segment>
       <Segment attached>
         <Grid verticalAlign="middle">
           <Grid.Column width={1}>
             <Icon name="marker" size="large" color="teal" />
           </Grid.Column>
           <Grid.Column width={11}>
           <span>{this.props.events.city}, {this.props.events.venue}</span>
           </Grid.Column>
           <Grid.Column width={4}>
             <Button onClick={this.showMap} color="teal" size="tiny" content="Show Map" />
           </Grid.Column>
         </Grid>  
       </Segment>
       {this.state.show &&
           <div style={{ height: '300px', width: '100%' }}>
           <SimpleMap
           lat={ this.props.events.venueLatLng.lat} 
           lng={ this.props.events.venueLatLng.lng} />
           </div>}
     </Segment.Group>
  )
}   
}

export default EventDetailedInfo;

