import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Container } from 'semantic-ui-react';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import './App.css'

import Navbar from './Navigation/Navbar';
import EventDashboard from './EventDashboard';
import EventDetailed from './EventDetailed/EventDetailed';
import UserDashboard from './user/UserDashBoard'
import UserDetailed from './user/UserDetailed'
import Settings from './Settings/Settings'
import EventFrom from './EventList/EventFrom'
import Home from './HomePage/Home'
import EventGallery from './EventList/EventGallery'

const eventsDashboard = [
    {
      id: '1',
      title: 'Trip to Empire State building',
      date: '2018-03-21',
      category: 'culture',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
      city: 'NY, USA',
      venue: 'Empire State Building, 5th Avenue, New York, NY, USA',
      venueLatLng: {
        lat: 40.7484405,
        lng: -73.98566440000002
      },
      hostedBy: 'Bob',
      hostPhotoURL: 'https://randomuser.me/api/portraits/men/55.jpg',
      attendees: [
        {
          id: 'a',
          name: 'Bob',
          photoURL: 'https://randomuser.me/api/portraits/men/54.jpg'
        },
        {
          id: 'b',
          name: 'Tom',
          photoURL: 'https://randomuser.me/api/portraits/men/65.jpg'
        }
      ]
    },
    {
      id: '2',
      title: 'Trip to Punch and Judy Pub',
      date: '2018-03-18',
      category: 'film',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
      city: 'London, UK',
      venue: 'Punch & Judy, Henrietta Street, London, UK',
      venueLatLng: {
        lat: 51.5118074,
        lng: -0.12300089999996544
      },
      hostedBy: 'Tom',
      hostPhotoURL: 'https://randomuser.me/api/portraits/men/33.jpg',
      attendees: [
        {
          id: 'a',
          name: 'Bob',
          photoURL: 'https://randomuser.me/api/portraits/men/32.jpg'
        },
        {
          id: 'b',
          name: 'Tom',
          photoURL: 'https://randomuser.me/api/portraits/men/43.jpg'
        }
      ]
    },
    {
      id: '3',
      title: 'Trip to Punch and Judy Pub',
      date: '2018-03-18',
      category: 'music',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
      city: 'London, UK',
      venue: 'Punch & Judy, Henrietta Street, London, UK',
      venueLatLng: {
        lat: 51.5118074,
        lng: -0.12300089999996544
      },
      hostedBy: 'Tom',
      hostPhotoURL: 'https://randomuser.me/api/portraits/men/62.jpg',
      attendees: [
        {
          id: 'a',
          name: 'Bob',
          photoURL: 'https://randomuser.me/api/portraits/men/25.jpg'
        },
        {
          id: 'b',
          name: 'Tom',
          photoURL: 'https://randomuser.me/api/portraits/men/29.jpg'
        }
      ]
    }
  ];

export default class App extends Component {
  state={
    events:eventsDashboard,
    eventToSelect:null,
    venueLatLng:{}, 
    username:"",
    searchTerm:'',
    apiKeyGallery: '10305263-ffddcd248d17909fe2a6eb791',
    images:[],
    apiKeyWeather:'30bfd997a310321929b7f5839e2d99d3',
    searchCity:'',
    temperature : undefined,
    city : undefined,
    country : undefined,
    humidity : undefined,
    description : undefined,
    wind : undefined,
    icon : undefined,
    error : undefined,
    tempMin: undefined,
    tempMax: undefined,
    pressure: undefined,
    lat:undefined,
    lon:undefined,
    forecast:undefined,
  }
  inputChange = (e) => {
    let newEvent = this.state.events
    newEvent[e.target.name] = e.target.value
    this.setState({events: newEvent})
  }

handleSubmitCity=(e)=>{
  e.preventDefault()
  if (this.state.searchCity!=='' && this.state.searchCity !== undefined) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.searchCity}&appid=${this.state.apiKeyWeather}&units=metric`)
  .then(res=> res.json())
    .then(data=> data.status !== 400 ? this.setState({

       temperature:data.main.temp,
       tempMin:data.main.temp_min,
       tempMax:data.main.temp_max,
       pressure:data.main.pressure,
       city:data.name,
       country:data.sys.country,
       wind:data.wind.speed,
       humidity:data.main.humidity,
       description:data.weather[0].description,
       icon:data.weather[0].icon,
       main:data.weather[0].main,
       lat:data.coord.lat,
       lon:data.coord.lon,
       searchCity:'',
      }):null)
      .catch(err=> console.log(err))

  }if (this.state.searchCity!=='' && this.state.searchCity !== undefined) {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${this.state.searchCity}&appid=${this.state.apiKeyWeather}&units=metric&cnt=7`)
      .then(res=> res.json())
      .then(data => this.setState({
        forecast:data.list
      })
    )
      .catch(err=> console.log(err))
  }else{
    this.setState({
      temperature : undefined,
      city : undefined,
      country : undefined,
      humidity : undefined,
      description : undefined,
      wind : undefined,
      icon : undefined,
      error : undefined,
      tempMin: undefined,
      tempMax: undefined,
      pressure: undefined,
      lat:undefined,
      lon:undefined
    })
  }
}
handleSearchCity=(e)=>{
    this.setState({
      searchCity:e.target.value
    })
} 
handleSearchTerm=(e)=>{
    this.setState({
        searchTerm:e.target.value
    })
}
handleSubmitTerm=(e)=>{
    e.preventDefault()
    fetch(`https://pixabay.com/api/?key=${this.state.apiKeyGallery}&q=${this.state.searchTerm}&image_type=photo`)
    .then(res=> res.json())
    .then(data=> this.setState({
      images:data.hits,
       searchTerm:''}))

    .catch(err=> console.log(err))
}

handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => this.setState({venueLatLng:latLng}))
      .catch(error => console.error('Error', error));
  }
  addEventForm = (newEvent) => {
    newEvent.id = Math.random();
    newEvent.hostPhotoURL = './assets/profilePic.png'
    newEvent.venueLatLng = this.state.venueLatLng
    newEvent.attendees = [
      {
        id: Math.random(),
        name: this.state.username,
        photoURL: `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 99) + 1}.jpg`
      }
    ]
    let createEvent = [...this.state.events, newEvent]
    this.setState({
      events:createEvent,

    })
  }
  formSelectedEvent = (selectedEvent) => () => {
    this.setState({
      eventToSelect:selectedEvent,
    })
  }
  updateEvent = (updatedEvent) => {
    this.setState({
      events:this.state.events.map((event)=>{ 
        if (event.id === updatedEvent.id) {
          return Object.assign({}, updatedEvent)
        }else{
          return event
        }
      }),
      eventToSelect:null
    })
  }
  deleteEvent = (id) => () => {
    let deletedEvent = this.state.events.filter((event)=>{
      return event.id !== id
    })
    this.setState({
      events:deletedEvent
    })
  }
  render() {    
    return (
      <div>
        <Switch>
        <Route exact path='/' component={Home}/>
        </Switch>
        <Route path='/(.+)' render={()=> (
          <div>
          <Navbar render={this.navbarProps}
          />
          <Container className='main'>
          <Switch>
          <Route exact path='/menage/:id' render={this.addFormProps}/>
          <Route exact path='/events/:id' render={this.eventDetailed}/>
          <Route exact path='/events' render={this.eventsDashboardProps}/>
          <Route path='/people' component={UserDashboard}/>
          <Route path='/profile/:id' component={UserDetailed}/>
          <Route path='/settings' component={Settings}/>
          <Route path='/createEvent' render={this.addFormProps}/>
          <Route path='/eventDetailed' component={EventDetailed}/>
          <Route path='/gallery' render={this.gallery} />
          </Switch>
          </Container>
          </div>
        )}
        />
      </div>
    )
  }
  eventsDashboardProps = (props) => {
    return (<EventDashboard 
      formSelectedEvent={this.formSelectedEvent}
      deleteEvent={this.deleteEvent}
      events={this.state.events} 
      searchTerm={this.state.searchTerm}
      images={this.state.images}
      handleSubmitCity={this.handleSubmitCity}
      handleSearchCity={this.handleSearchCity}
      searchCity={this.state.searchCity}
      
      temperature={this.state.temperature} 
      city={this.state.city} 
      country={this.state.country} 
      humidity={this.state.humidity} 
      description={this.state.description} 
      wind={this.state.wind} 
      icon={this.state.icon} 
      error={this.state.error}
      tempMin={this.state.tempMin}
      tempMax={this.state.tempMax}
      pressure={this.state.pressure}
      lat={this.state.lat}
      lon={this.state.lon}

      forecast={this.state.forecast}
      {...props}/>);
  }
  addFormProps = (props) => {
    return (<EventFrom 
      addEventForm={this.addEventForm}
      formSelectedEvent={this.formSelectedEvent}
      updateEvent={this.updateEvent}
      eventToSelect={this.state.eventToSelect}
      events={this.state.events} 
      handleSelect={this.handleSelect}
      venueLatLng={this.state.venueLatLng}

      category={this.state.category}
      categories={this.state.categories}
      onChangeCategory={this.onChangeCategory}
      {...props}
      />);
  }
  eventDetailed=(props)=>{
    return (
    <EventDetailed 
    username={this.state.username}
    eventToSelect={this.state.eventToSelect}
    formSelectedEvent={this.formSelectedEvent}
    events={this.state.events} 
    venueLatLng={this.state.venueLatLng}
    {...props}/>)
  }
  navbarProps=(props)=>{
    return (
    <Navbar 
    username={this.state.username}
    signIn={this.signIn}
    signOut={this.signIn}
    {...props}/>)
  }
  gallery=(props)=>{
    return (<EventGallery 
      searchTerm={this.state.searchTerm}
      images={this.state.images}
      handleSearchTerm={this.handleSearchTerm}
      handleSubmitTerm={this.handleSubmitTerm}
      {...props}/>);
  }
}

