import Slide from 'react-reveal/Slide';
import {Segment} from 'semantic-ui-react';
import {scroller} from 'react-scroll'
import React, { Component } from 'react'

export default class Sidebar extends Component {

  scrollElement = (element) => {
    scroller.scrollTo(element, {
      duration:1500,
      delay:100, 
      smooth:true,
      
    })
  }

  render() {
    return (
      <div
      style={{
      position: 'fixed',
      top: '500px',
      bottom: '600px',
      left: '0px',
      width: '100px',
      height: '500px',
      zIndex:'1000'
    }}>
      <Slide left>
        <Segment style={style} onClick={()=>this.scrollElement('EventSection')}>Event Section</Segment>
        <Segment style={style} onClick={()=>this.scrollElement('PromoSection')}>Promo Section</Segment>
        <Segment style={style} onClick={()=>this.scrollElement('PacketPrices')}>PacketPrices</Segment>
        <Segment style={style} onClick={()=>this.scrollElement('Footer')}>Footer</Segment>
      </Slide>
    </div>
    )
  }
}
const style={
  margin:'5px', 
  height:'50px', 
  width:'150px', 
  cursor:'pointer',
  background: 'linear-gradient(to bottom, rgba(30,87,153,0) 0%,rgba(30,87,153,0.8) 15%,rgba(30,87,153,1) 19%,rgba(30,87,153,1) 20%,rgba(41,137,216,1) 50%,rgba(30,87,153,1) 80%,rgba(30,87,153,1) 81%,rgba(30,87,153,0.8) 85%,rgba(30,87,153,0) 100%)', color:'white', 
  border:'none', 
  borderRadius:'50px', 
  textAlign:'center',
  fontWeight:'bold'
}
