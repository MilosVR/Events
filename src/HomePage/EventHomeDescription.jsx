import React, {Component} from 'react'
import Slide from 'react-reveal/Slide';
import Bounce from 'react-reveal/Bounce';

export default class EventHomeDescription extends Component {
    render() {
        return (
            <div style={{background:'purple'}}>
                <h1 style={{color:'white', textAlign:'center', paddingTop:'10px',fontFamily:"'Poiret One', cursive"}}
                >What should your event look like?</h1>
            <div
                className='promo-section'
                style={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                background: 'black',
                width: '100%',
                textAlign: 'center',
                margin: '0 auto'
            }}>
                <Slide left>
                <div
                    className='promo1'
                    style={{
                    height: '400px',
                    width: '300px',
                    border: '2px solid purple',
                    margin: '40px'
                }}>
                <div 
                style={{margin:'10px',
                border:'2px solid purple', 
                color:'purple', height:'50px', 
                width:'275px',verticalAlign:'middle',
                borderRadius:'5px',
                boxShadow: '5px 10px 18px purple'
                }}>
                <p style={{paddingTop:'10px', fontSize:'18px', fontFamily:"'Kaushan Script', cursive"}}><b>Event happening</b></p>
                </div>
                
                <h3 style={{color:'purple', textShadow:' 0 0 3px purple'}}>Event time:</h3>
                <span style={{color:'white', textShadow:' 0 0 3px white', fontSize:'19px'}}
                >14:00 pm</span>
                
                <div style={{borderBottom:'2px dotted purple', marginTop:'25px'}}></div>

                <h3 style={{color:'purple', textShadow:' 0 0 3px purple'}}>Event date:</h3>
                <span style={{color:'white', textShadow:' 0 0 3px white', fontSize:'19px'}}
                >January 24 2018</span>
                </div>
                </Slide>

                <Bounce bottom delay={400}>
                <div
                    className='promo2'
                    style={{
                    height: '400px',
                    width: '300px',
                    border: '2px solid purple',
                    margin: '40px'
                }}>
                <div 
                style={{margin:'10px',
                border:'2px solid purple', 
                color:'purple', height:'50px', 
                width:'275px',verticalAlign:'middle',
                borderRadius:'5px',
                boxShadow: '5px 10px 18px purple'
                }}>
                <p style={{paddingTop:'10px', fontSize:'18px', fontFamily:"'Kaushan Script', cursive"}}><b>Event Title</b></p>
                </div>

                <h3 style={{color:'purple', textShadow:' 0 0 3px purple'}}>Event title:</h3>
                <span style={{color:'white', textShadow:' 0 0 3px white', fontSize:'19px'}}
                >Trip to London, UK</span>
                
                <div style={{borderBottom:'2px dotted purple', marginTop:'25px'}}></div>

                <h3 style={{color:'purple', textShadow:' 0 0 3px purple'}}>Event description:</h3>
                <span style={{color:'white', textShadow:' 0 0 3px white', fontSize:'19px'}}
                ><p style={{textAlign:'justify', margin:'10px'}}>One of the world's most visited cities, London has something for everyone: from history and culture to fine food and good times.</p>
                </span>
                </div>
                </Bounce>

                <Slide right>
                <div
                    className='promo3'
                    style={{
                    height: '400px',
                    width: '300px',
                    border: '2px solid purple',
                    margin: '40px',
                    color:'white'
                }}>
                <div 
                style={{margin:'10px',
                border:'2px solid purple', 
                color:'purple', height:'50px', 
                width:'275px',verticalAlign:'middle',
                borderRadius:'5px',
                boxShadow: '5px 10px 18px purple'
                }}>
                <p style={{paddingTop:'10px', fontSize:'18px', fontFamily:"'Kaushan Script', cursive"}}><b>Event Location</b></p>
                </div>
                
                <h3 style={{color:'purple', textShadow:' 0 0 3px purple'}}>Event city and state:</h3>
                <span style={{color:'white', textShadow:' 0 0 3px white', fontSize:'19px'}}
                >London, UK</span>

                <div style={{borderBottom:'2px dotted purple', marginTop:'25px'}}></div>

                <h3 style={{color:'purple', textShadow:' 0 0 3px purple'}}>Event GeoCode:</h3>
                <span style={{color:'white', textShadow:' 0 0 3px white', fontSize:'19px'}}
                ><p style={{ margin:'10px'}}>Find out exact location with: </p>
                </span>
                <img  alt='' src='assets/mapsLogo.png' style={{width:'50px', height:'50px', verticalAlign:'middle'}}/>
                <b style={{fontSize:'15px'}}>Google Maps</b>
                </div>
                </Slide>
                </div>
            </div>
        )
    }
}
