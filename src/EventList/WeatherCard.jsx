import React from 'react'
import { Image, Segment, Label, Button} from 'semantic-ui-react'
import './WeatherCard.css'
import Bounce from 'react-reveal/Bounce'
import Zoom from 'react-reveal/Zoom'

const WeatherCard = (props) => {
  console.log('lat: ', props.lat, 'lon: ', props.lon);
  
  return (
    <Bounce>
    <Segment  style={{position:'relative', height:'220px', marginTop:'10px'}} attached>
    <img src='/assets/weather.jpg' alt=''
    style={{width:'100%', height:'100%', position:'absolute', top:'0px', left:'0px'}}/>

    <Label ribbon='right'
    style={{
    height:'50px', 
    width:'150px', 
    fontFamily:'Aladin, cursive', 
    paddingTop:'20px', 
    fontSize:'18px',
    background:' rgba(0, 0, 0, 0.5)',
    color:'white',
    textShadow: 'rgb(0, 0, 0) 2px 2px 4px'
    }}>
    {props.city}, {props.country}
    </Label>
  
      <div style={{
        top:'11px', 
        left:'10px', 
        position:'absolute', 
        color:'white',
        background:' rgba(0, 0, 0, 0.5)',
        width:'180px',
        height:'100px',
        border:'none',
        borderRadius:'10px',
        fontFamily:'Aladin, cursive'
        }}>
        <div style={{ marginTop:'20px', textAlign:'center'}}>
      <span style={{fontSize:'45px'}}> {Math.floor(props.temperature)} °C</span><br/>
        <Image src={`http://openweathermap.org/img/w/${props.icon}.png`} verticalAlign='middle'
        /> 
      <span style={{color:'white', fontFamily:'Poiret One, cursive', fontWeight:'bold'}}>{props.description}</span>
      </div>
      </div>

        <div
        style={{
          position:'absolute', 
          bottom:'10px', 
          left:'10px',
          color:'white',
          zIndex:'16',
          fontSize:'14px',
          fontFamily:'Poiret One, cursive',
          fontWeight:'bold'
          }}>
        Humidity: {props.humidity} %<br/>
        Wind: {props.wind} km/h<br/>
        Pressure: {props.pressure} %
        </div>

        <div style={{bottom:'10px', right:'10px', position:'absolute'}}>
        <Label color='black'>Min<Label.Detail>{props.tempMin} °C</Label.Detail></Label>
        <Label color='black'>Max<Label.Detail>{props.tempMax} °C</Label.Detail></Label>
        </div>
    
    </Segment>
    <Zoom right delay={1000}>
    <Segment attached='bottom' clearing 
    style={{background:'rgba(0, 0, 0, 0.8)', fontFamily:"Aclonica, sans-serif", color:'white', position:'relative'}}> 
      <span style={{top:'24px',position:'absolute', left:'20px' }}>Click Show and get 5-day forecast</span>

    <Button onClick={props.isOpenWeather} floated='right'  
    style={{background:'url("/assets/metal.jpg")', color:'white', textShadow: 'rgb(0, 0, 0) 2px 2px 4px'}}
    >
    {props.isMapOPen ? 'Show' : 'Open'}</Button>
    </Segment>
    </Zoom>
    </Bounce>
  )
}

export default WeatherCard
