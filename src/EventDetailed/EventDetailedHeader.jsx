import React from 'react'
import {Header, Segment, Image, Item, Button} from 'semantic-ui-react'
import { withRouter, Link } from 'react-router-dom'

const EventDetailedHeader = (props) => {

    return (
          <Segment.Group>
             <Segment basic attached="top" inverted style={{padding:'0px'}}>
               <Image src={`/assets/${props.events.category || 'culture'}.jpg`} fluid style={{filter:'brightness(50%)'}}/>
               <Segment basic style={{ position:'absolute', bottom:'10px', left:'10px'}}>
                 <Item.Group>
                   <Item>
                     <Item.Content>
                       <Header
                         size="huge"
                         content={props.events.title}
                         style={{ color: 'lightBlue' }}
                       />
                       <p style={{color:'#F4A460', marginTop:'10px'}}>{props.events.date}</p>
                       <a style={{color:'#F4A460'}}>
                         Hosted by <strong><span style={{color:'lightBlue'}}>{props.events.hostedBy}</span></strong>
                       </a>
                     </Item.Content>
                   </Item>
                 </Item.Group>
               </Segment>
             </Segment>
       
             <Segment attached="bottom">
              
               <Button onClick={()=> props.history.goBack() }>Cancel My Place</Button>
             
               <Button color="teal">JOIN THIS EVENT</Button>
       
              <Link to={'/menage/'+ props.events.id}>
              <Button color="orange" floated="right">
                 Manage Event
               </Button>
              </Link>
               
             </Segment>
           </Segment.Group>
    )
}

export default withRouter(EventDetailedHeader)
