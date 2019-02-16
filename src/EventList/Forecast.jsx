import React, { Component } from 'react'
import { Image, Table } from 'semantic-ui-react';

export default class Forecast extends Component {
    
    render() {
        console.log(this.props.forecast);
    return (
      <Table.Cell style={{color:'white', fontFamily:"Aclonica, sans-serif", fontWeight:'bold',fontSize:"12px"}}> 
        <Image  
        src={`http://openweathermap.org/img/w/${this.props.img}.png`} /><br/>
        {Math.floor(this.props.forecast)}°C
      </Table.Cell>
    )
  }
}
