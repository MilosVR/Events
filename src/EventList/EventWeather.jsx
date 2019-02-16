import { Segment, Button, Form, Input, Item, Table } from 'semantic-ui-react'
import React, { Component } from 'react'
import WeatherCard from './WeatherCard'
import WeatherMap from './WeatherMap'
import Forecast from './Forecast';
export default class EventWeather extends Component {

    state={isMapOPen:false}

    isOpenWeather = () => {
        this.setState({
            isMapOPen:!this.state.isMapOPen
        })
    }

  render() {
    return (
        <div style={{marginTop:'20px',}}>
        <Segment attached='top' 
        style={{
            background:'Crimson', 
            color:'white', 
            fontFamily:"Aclonica, sans-serif",
            textShadow: 'rgb(0, 0, 0) 2px 2px 4px'
            }}>Weather</Segment>

            <Segment attached >
            <Item.Group>
        <Item>
            <Item.Image src='/assets/openweathermap.png' style={{width:'80px', height:'80px'}} />
                <Item.Content>
                    <Item.Header as='a'>Open Weather map</Item.Header>
                    <Item.Meta>
                        <span className='cinema'>Checkout Weather when your event start.</span>
                    </Item.Meta>
                    <Item.Description>www.openweathermap.com</Item.Description>
                </Item.Content>
        </Item>
        </Item.Group>

            <Form onSubmit={this.props.handleSubmitCity} style={{marginTop:'20px'}}> 
                <Form.Field inline>
                <Input placeholder='Enter city' style={{width:'276px'}}
                onChange={this.props.handleSearchCity}
                value={this.props.searchCity}
                />
                <Button style={{background:'Crimson', color:'white'}}>Search</Button>
                </Form.Field>
            </Form>
            </Segment>
            
            
                {this.props.city &&
                <WeatherCard 
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

                isOpenWeather={this.isOpenWeather}
                isMapOPen={this.state.isMapOPen}

                >
                   
                </WeatherCard>
                }

               

                {this.state.isMapOPen &&   
                <Table celled fixed singleLine >
                    <Table.Header 
                    >
                    <Table.Row >
                        <Table.HeaderCell style={{color:'white', fontFamily:"Aclonica, sans-serif",
                        textShadow: 'rgb(0, 0, 0) 2px 2px 4px',background:'rgba(0, 0, 0, 0.7)'}}>Mon</Table.HeaderCell>
                        <Table.HeaderCell style={{color:'white', fontFamily:"Aclonica, sans-serif",
                        textShadow: 'rgb(0, 0, 0) 2px 2px 4px',background:'rgba(0, 0, 0, 0.7)'}}>Tue</Table.HeaderCell>
                        <Table.HeaderCell style={{color:'white', fontFamily:"Aclonica, sans-serif",
                        textShadow: 'rgb(0, 0, 0) 2px 2px 4px',background:'rgba(0, 0, 0, 0.7)'}}>Wed</Table.HeaderCell>
                        <Table.HeaderCell style={{color:'white', fontFamily:"Aclonica, sans-serif",
                        textShadow: 'rgb(0, 0, 0) 2px 2px 4px',background:'rgba(0, 0, 0, 0.7)'}}>Thu</Table.HeaderCell>
                        <Table.HeaderCell style={{color:'white', fontFamily:"Aclonica, sans-serif",
                        textShadow: 'rgb(0, 0, 0) 2px 2px 4px',background:'rgba(0, 0, 0, 0.7)'}}>Fri</Table.HeaderCell>
                        <Table.HeaderCell style={{color:'white', fontFamily:"Aclonica, sans-serif",
                        textShadow: 'rgb(0, 0, 0) 2px 2px 4px',background:'rgba(0, 0, 0, 0.7)'}}>Sat</Table.HeaderCell>
                        <Table.HeaderCell style={{color:'white', fontFamily:"Aclonica, sans-serif",
                        textShadow: 'rgb(0, 0, 0) 2px 2px 4px',background:'rgba(0, 0, 0, 0.7)'}}>Sun</Table.HeaderCell>
                    </Table.Row>
                    </Table.Header>

                <Table.Body style={{background:'url("/assets/kika.jpg")'}}>
                    <Table.Row>
                    {this.props.forecast && this.props.forecast.map((day)=>{
                        return <Forecast forecast={day.main.temp} img={day.weather[0].icon} key={day.dt}/>
                    })}
                    </Table.Row>
                </Table.Body>    
                </Table> }

                 {this.state.isMapOPen &&     
                <Segment>
               <WeatherMap lat={this.props.lat} lon={this.props.lon}/>
                </Segment>}
               
      </div>
    )
  }
}
