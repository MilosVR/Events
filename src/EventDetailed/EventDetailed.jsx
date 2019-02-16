import React, { Component } from 'react'
import EventDetailedHeader from '../EventDetailed/EventDetailedHeader';
import { Grid } from 'semantic-ui-react';
import EventDetailedInfo from '../EventDetailed/EventDetailedInfo';
import EventDetailedSidebar from '../EventDetailed/EventDetailedSidebar';

export default class userDetailed extends Component {

  state={
    events:this.props.eventToSelect
  }

  componentDidMount(){
    let eventId = this.props.match.params.id
    let oneEvent=this.props.events ? this.props.events.filter(event => event.id === eventId) : {}

    if (this.state.events !== this.props.eventToSelect) {
    this.setState({
      events:oneEvent[0] 
    })
  }
}
  render() {
    
    return (
        <Grid>
          <Grid.Column width={12}>
          <EventDetailedHeader 
          events={this.state.events || ''}

          />
          <EventDetailedInfo events={this.state.events || ''}
          />
          </Grid.Column>
          <EventDetailedSidebar events={this.state.events || ''} />
        </Grid> 
    )
  }
}
