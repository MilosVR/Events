import React from 'react'
import {List, Image} from 'semantic-ui-react'

const EventLIstAtendee = (props) => {
  return (
    <List.Item >
        <Image src={props.atendee.photoURL} alt='' size='mini' circular/>
    </List.Item>
  )
}

export default EventLIstAtendee
