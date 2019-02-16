import { Card, Icon, Image, Modal, Label } from 'semantic-ui-react'

import React, { Component } from 'react'

export default class EditorChoice extends Component {
  render() {
    return (
        <Card style={{marginBottom:'15px'}} >
        <Image src={this.props.img.image} style={{height:'170px', width:'300px'}}/>
        <Card.Content>
          <Card.Header>User: {this.props.img.user}</Card.Header>
          <Card.Meta>
            <span className='date'>Views: {this.props.img.views}</span>
          </Card.Meta>
          <Card.Description>Downloads: {this.props.img.downloads}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='user' floated='left'/>
            Likes: {this.props.img.likes}
          </a>

          <Modal trigger={<a  style={{float:'right'}}><Icon name='zoom'></Icon>Zoom</a>}>
                <Modal.Header style={{
                  textAlign:'center', 
                  verticalAlign:'middle', 
                  background:'linear-gradient(to bottom, rgba(30,87,153,1) 0%,rgba(41,137,216,1) 50%,rgba(32,124,202,1) 51%,rgba(125,185,232,1) 100%)'}}>

                <span style={{
                  position:'absolute', 
                  left:'10px', 
                  color:'white', 
                  fontFamily:'"Kaushan Script", cursive', 
                  textShadow:'text-shadow: 2px 2px 4px #000000',
                  fontSize:'24px'
                  }}>Pixabay.com</span>
                  <span style={{color:'white', 
                  fontFamily:'"Kaushan Script", cursive', 
                  textShadow:'text-shadow: 2px 2px 4px #000000'}}>by </span>
                 <Label as='a' image basic> 
                    
                    <Image avatar spaced src='/assets/logo.png' />
                    {this.props.img.user}
                  </Label>
                 </Modal.Header>
                <Modal.Content image>
                <Image wrapped size='medium' src={this.props.img.image} style={{height:'100%', width:'100%'}}/>
                </Modal.Content>
            </Modal>
        </Card.Content>
      </Card>
    )
  }
}