import React, {Component} from 'react';
import './App.css';
import {Grid} from 'semantic-ui-react';
import EventList from './EventList/EventList';
import EventActivity from './EventList/EventActivity'
import SponsoredBy from './EventList/SponsoredBy'
import EventWeather from './EventList/EventWeather';

class EventDashboard extends Component {
  
  render() {
    return (
        <Grid>
          <Grid.Column width={10}>
          <EventList 
          events={this.props.events} 
          formSelectedEvent={this.props.formSelectedEvent}
          deleteEvent={this.props.deleteEvent}
          />
          </Grid.Column>

          <Grid.Column width={6}>

          <EventActivity/>

          <SponsoredBy/>

          <EventWeather 
          handleSubmitCity={this.props.handleSubmitCity}
          handleSearchCity={this.props.handleSearchCity}
          searchCity={this.props.searchCity}

          temperature={this.props.temperature} 
          city={this.props.city} 
          country={this.props.country} 
          humidity={this.props.humidity} 
          description={this.props.description} 
          wind={this.props.wind} 
          icon={this.props.icon} 
          error={this.props.error}
          tempMin={this.props.tempMin}
          tempMax={this.props.tempMax}
          pressure={this.props.pressure}
          lat={this.props.lat}
          lon={this.props.lon}

          forecast={this.props.forecast}
          />
          </Grid.Column>
        </Grid>
    );
  }
}

export default EventDashboard;
