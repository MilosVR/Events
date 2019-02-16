import React from 'react'
import Fade from 'react-reveal/Fade'
import {Icon, Form, Button, Input} from 'semantic-ui-react'
import Slide from 'react-reveal/Slide'

const Footer = () => {
  return (  
    <div style={{ width:'100%',position:'relative',height:'500px',  }}>

    <div style={{
        background:'red', 
        height:'65px',
        lineHeight:'65px',
        width:'100%', 
        position:'absolute', 
        backgroundImage: "url('./assets/sevilla.jpg')",
        color:'white',
        textAlign:'center',
        fontSize:'28px', 
        fontFamily:'Righteous, cursive',
        zIndex:'200',
        textShadow: '2px 2px 4px #000000'    
        }}>
    Special offer and main event - Tomorrowland - </div>

    <div style={{
        position:'absolute',
        width:'900px', 
        height:'80px',
        lineHeight:'80px',
        background:'black',
        color:'white', 
        zIndex:'2',
        left: '50%',
        bottom:'0px',
        transform: 'translate(-50%,-50% )',
        textAlign:'center',
        border:'none',
        borderRadius:'10px'
    }}>
    <span style={{fontSize:'20px', fontFamily:'Righteous, cursive'}}>Social networks </span>
    <Icon name='facebook official' size='big' style={{marginLeft:'12px'}}></Icon>
    <span style={{fontFamily:'Roboto', fontWeight:'bold'}}>Facebook</span>
    <span style={{borderRight:'1px solid white', marginLeft:'5px'}}/>

    <Icon name='twitter' size='big' style={{marginLeft:'12px'}}></Icon>
    <span style={{fontFamily:'Roboto', fontWeight:'bold'}}>Twitter</span>
    <span style={{borderRight:'1px solid white', marginLeft:'5px'}}/>

    <Icon name='youtube' size='big' style={{marginLeft:'12px'}}></Icon>
    <span style={{fontFamily:'Roboto', fontWeight:'bold'}}>Youtube</span>
    <span style={{borderRight:'1px solid white', marginLeft:'5px'}}/>

    <Icon name='instagram' size='big' style={{marginLeft:'12px'}}></Icon>
    <span style={{fontFamily:'Roboto', fontWeight:'bold'}}>Instagram</span>
    <span style={{borderRight:'1px solid white', marginLeft:'5px'}}/>

    <Icon name='vimeo v' size='big' style={{marginLeft:'12px'}}></Icon>
    <span style={{fontFamily:'Roboto', fontWeight:'bold'}}>Vimeo</span>
    <span style={{borderRight:'1px solid white', marginLeft:'5px'}}/>
    </div>

    <Fade>
        <div style={{
            position:'absolute', 
            width:'100%', 
            height:'100%'
        }}>

        <video src='/assets/party.mp4' autoPlay='true' loop="true" preload="true" muted='true'

        style={{
        position:'absolute',
        left:'0px',
        top:'0px',    
        width:'100%', 
        height:'500px',
        overflow:'hidden',
        objectFit:'cover',
        }}>
            </video>
            </div>
            
    </Fade>  
        
        <Slide left delay={1000}>
          <div style={{
              position:'absolute', 
              left:'10px', top:'100px', 
              background:'black', 
              width:'250px', 
              boxSizing: 'border-box',
              height:'350px',
              borderRadius:'10px',
              border:'2px solid #000',
              outline: '1px dashed #fff',
              outlineOffset: '-10px',
              }}>
              <Form style={{
                  textAlign:'center', 
                  color:'white', 
                  left: '50%', 
                  position:'absolute',
                  top:'50px',
                  transform: 'translate(-50%)',
              }}>
                <div  style={{color:'white', fontFamily:'Righteous, cursive', fontSize:'20px'}}>
                Subscribe To Us</div>  <br/>
                <Form.Field>
                <label style={{color:'white'}}>Username</label>
                <Input placeholder='Username' />
                </Form.Field>
                <Form.Field>
                <label style={{color:'white'}}>E-mail</label>
                <Input placeholder='E-mail' />
                </Form.Field>
                <Button type='submit' style={{
                    background: 'linear-gradient(to right, orange , yellow, green, cyan, blue, violet)',
                    color:'black',
                    textShadow: '2px 2px 4px #000000'
                }}
                >Submit</Button>
            </Form>
          </div>
          </Slide>
         
          <Slide right delay={1000}>
          <div style={{
              position:'absolute', 
              right:'10px', top:'100px',
              background:'black',
              width:'250px',
              boxSizing: 'border-box',
              height:'350px',
              borderRadius:'10px',
              border:'2px solid #000',
              outline: '1px dashed #fff',
              outlineOffset: '-10px',
              overflow:'hidden'
              }}>
                  <img alt='' src='/assets/Tomorrowland1.png' style={{ height:'100%', width:'100%'}}/>
              <div style={{
                  textAlign:'center', 
                  color:'white', 
                  left: '50%', 
                  position:'absolute',
                  top:'50px',
                  transform: 'translate(-50%)',
                  fontSize:'15px',
                  fontWeight:'bold',
                  background:'black',
                  width:'200px',
                  fontFamily:'Roboto',
                  borderRadius:'5px',
                  border:'2px solid #000',
              outline: '1px dashed #fff',
              outlineOffset: '-10px',
              height:'80px',
                  }}>
                  <p style={{marginTop:'15px'}}>Subscribe to us and win 2 ticket for Tomorowland</p>
              </div><br/>
          </div>
          </Slide>
    
    </div>
  )
}

export default Footer
