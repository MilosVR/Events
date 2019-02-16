import React from 'react'
import {Segment, List, Item, Label} from 'semantic-ui-react'
import '../EventDetailed/EventSidebar.css'

const EventDetailedSidebar = (props) => {
  return (
       <div>
          <Segment
             textAlign="center"
             style={{ border: 'none', marginTop: '16px', width:'248px' }}
             attached="top"
             secondary
             inverted
             color="teal"
          >
            {props.events.attendees && props.events.attendees.length } 
            {props.events.attendees && props.events.attendees.length === 1 ? 'person' : 'people'} are going.
          </Segment>
          <Segment attached style={{marginRight:'60px'}}>
          <List relaxed divided >
            {props.events.attendees && props.events.attendees.map(attendee => 
              <Item  key={attendee.id} style={{ position: 'relative' }}>
                <Label
                  style={{ position: 'absolute' }}
                  color="orange"
                  ribbon="right"
                >
                  Host
                </Label>
                <Item.Image  size="mini" src={attendee.photoURL} circular/>
                <Item.Content verticalAlign="middle">
                  <Item.Header as="h4">
                    <a>{attendee.name}</a>
                  </Item.Header>
                </Item.Content>
              </Item>
              )}
            </List>
          </Segment>
        </div>
  )
}

export default EventDetailedSidebar
