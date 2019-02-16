import React, {Component} from 'react'
import {Segment, Form, Button, TextArea, Grid, Select} from 'semantic-ui-react';
import PlacesAutocomplete from 'react-places-autocomplete'

export const emptyEvent = {
  title: '',
  date: '',
  city: '',
  venue: '',
  hostedBy: '',
  description: '',
  category: null,
}

export default class EventFrom extends Component {

state = {
    events: emptyEvent,
    categories: [
      {key: 'drinks', text: 'Drinks', value: 'drinks'},
      {key: 'culture', text: 'Culture', value: 'culture'},
      {key: 'film', text: 'Film', value: 'film'},
      {key: 'food', text: 'Food', value: 'food'},
      {key: 'music', text: 'Music', value: 'music'},
      {key: 'travel', text: 'Travel', value: 'travel'},
    ],
    venueLatLng:{}
  }
  
  componentDidMount() {

    let eventId = this.props.match.params.id
    let oneEvent = this.props.events && this.props.events.filter(event => event.id === eventId)[0]

    if (oneEvent !== this.state.events) {
      this.setState({
        events: oneEvent || emptyEvent
      })
    }
  }
  onFormSubmit = (e) => {
    e.preventDefault();

    if (this.state.events.id) {
      this.props.updateEvent(this.state.events)
      this.props.history.push('/events')
    } 
    else {
      this.props.addEventForm(this.state.events)
      this.props.history.push('/events')
    }
  }
  inputChange = (e) => {
    let newEvent = this.state.events
    newEvent[e.target.name] = e.target.value
    this.setState({events: newEvent})
  }
  onChangeCategory = (e, data) => {
    let newEvent = this.state.events
    newEvent['category'] = data.value;
      this.setState({ events: newEvent});
  }
  
  handleChange=(address)=>{
    let newEvent = this.state.events
    newEvent['city'] = address;
    this.setState({events: newEvent})
  }

  render() {
    return (
      <Grid>
        <Grid.Column width={12}>
          <Segment>
            <Form onSubmit={this.onFormSubmit}>
            <Form.Field >
            <PlacesAutocomplete
                      value={this.state.events.city}
                      onChange={this.handleChange} 
                      onSelect={this.props.handleSelect}
                      >
                      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <div>
                      <input
                        name='city'
                        {...getInputProps({
                          placeholder: 'Search Places ...',
                          className: 'location-search-input',
                        })}
                      />
                      <div className="autocomplete-dropdown-container">
                        {loading && <div>Loading...</div>}
                        {suggestions.map(suggestion => {
                          const className = suggestion.active
                            ? 'suggestion-item--active'
                            : 'suggestion-item';
                          // inline style for demonstration purpose
                          const style = suggestion.active
                            ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                            : { backgroundColor: '#ffffff', cursor: 'pointer' };
                          return (
                            <div
                              {...getSuggestionItemProps(suggestion, {
                                className,
                                style,
                              })}
                            >
                              <span>{suggestion.description}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
             </PlacesAutocomplete>
            </Form.Field>
              <Form.Field>
                <label style={{
                  color: 'dodgerBlue'
                }}>EVENT DETAILS</label>
                <input
                  placeholder='Give your event a name'
                  type='text'
                  name='title'
                  onChange={this.inputChange}
                  value={this.state.events.title}/>
              </Form.Field>
              <Form.Field>
                <input
                  placeholder='This event is hosted by:'
                  name='hostedBy'
                  onChange={this.inputChange}
                  value={this.state.events.hostedBy}/>
              </Form.Field>
              <Form.Field>
              <Select 
              placeholder='Event type' 
              options={this.state.categories} 
              value={this.state.category }
              onChange={this.onChangeCategory}
              name='category'
              />
              </Form.Field>
              <Form.Field>
                <TextArea
                  placeholder='Tell us more about your event'
                  style={{
                  minHeight: 100
                }}
                  name='description'
                  onChange={this.inputChange}
                  value={this.state.events.description}/>
              </Form.Field>
              <Form.Field>
                <label style={{
                  color: 'dodgerBlue'
                }}>EVENT LOACTION DETAILS</label>
                <input
                  placeholder='Date and time of event'
                  type='date'
                  name='date'
                  onChange={this.inputChange}
                  value={this.state.events.date}/>
              </Form.Field>
              <Form.Field>
                <input
                  placeholder='Event place'
                  name='venue'
                  onChange={this.inputChange}
                  value={this.state.events.venue}/>
              </Form.Field>
             
              <Button.Group>
                <Button type='button' onClick={()=>this.props.history.goBack()}>Cancel</Button>
                <Button.Or/>
                <Button positive type='submit'>Create</Button>
              </Button.Group>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>

    )
  }
}
