import React, {Component} from 'react'
import {
    Segment,
    Button,
    Item,
    List,
    Icon,
    Label
} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import EventLIstAtendee from './EventLIstAtendee';


export default class EventLIstItem extends Component {
    render() {
        return (
            <Segment.Group >
                <Segment>
                    <Item.Group>
                        <Item >
                            <Item.Image size="tiny" circular src={this.props.event.hostPhotoURL}/>
                            <Item.Content>
                                <Item.Header as="a">{this.props.event.title}</Item.Header>
                                <Item.Description >
                                    Hosted by
                                    <a> {this.props.event.hostedBy}</a>
                                </Item.Description>
                            </Item.Content>
                        </Item>
                    </Item.Group>
                </Segment>

                <Segment >
                    <List divided horizontal>
                        {this.props.event.attendees ? this
                            .props
                            .event
                            .attendees
                            .map((atendee) => {
                                return <EventLIstAtendee atendee={atendee} key={atendee.id}/>
                            }) : null
                        }
                    </List>

                </Segment>

                <Segment>
                    <Segment color='blue'>
                    <Icon loading name='calendar alternate outline' size='large'/>
                        <b style={{fontFamily:'cursive'}}>Date:</b> {this.props.event.date}
                    </Segment>
                    <Segment color='blue'>
                    <Icon loading name='marker' size='large'/>
                    <b style={{fontFamily:'cursive'}}>Place:</b> {this.props.event.venue},  {this.props.event.city}.
                    </Segment>

                </Segment>

                <Segment >
                    <b style={{fontFamily:'cursive'}}>Description:</b> {this.props.event.description}
                </Segment>
                <Segment clearing>
                    <Button as='div' labelPosition='right' floated='left'>
                        <Button color='blue' icon>
                            <Icon name='heart'/>
                            Like
                        </Button>
                        <Label as='a' basic pointing='left'>
                            2,048
                        </Label>
                    </Button>
                    <Button floated='right' color='red' onClick={this.props.deleteEvent(this.props.event.id)}>Delete</Button>
                    <Link to={'/events/' + this.props.event.id}>
                    <Button floated='right' primary onClick={this.props.formSelectedEvent(this.props.event)}>View</Button>
                    </Link>
                </Segment>
            </Segment.Group>
        )
    }
}
