import React, { Component } from 'react'
import EventLIstItem from './EventLIstItem';

export default class EventList extends Component {
  render() {
    return (
      <div>
         {this.props.events.map((event)=>{
          return <EventLIstItem 
          event={event} 
          key={event.id} 
          formSelectedEvent={this.props.formSelectedEvent}
          deleteEvent={this.props.deleteEvent}
          />
         })}
        
      </div>
    )
  }
}
