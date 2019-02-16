import Slider from 'react-slick'
import {Image, Button, Header} from 'semantic-ui-react';
import React, {Component} from 'react'
import './Slider.css'
import { withRouter } from 'react-router-dom'
import Sidebar from '../Sidebar'

class Carrousel extends Component {
    
    state = {
        slideOpen: false
      }
      openSidebar = () => {
        this.setState(prevState => ({
          slideOpen: !prevState.slideOpen
        }))
      }


    next=()=> {
        this
            .slider
            .slickNext()
    }
    previous=()=> {
        this
            .slider
            .slickPrev()
    }

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1
        }

        return (
            <div
                style={{
                overflow: 'hidden',
                height: `${window.innerHeight}px`
            }}>
                <Slider {...settings} ref={c => (this.slider = c)}>

                    <div>
                        <Image
                            src='/assets/slider1.jpg'
                            style={{
                            height: `${window.innerHeight}px`,
                            width: '100%'
                        }}/>
                    </div>

                    <div>
                        <Image
                            src='/assets/slider2.jpg'
                            style={{
                            height: `${window.innerHeight}px`,
                            width: '100%'
                        }}/>
                    </div>

                    <div>
                        <Image
                            src='/assets/slider3.jpg'
                            style={{
                            height: `${window.innerHeight}px`,
                            width: '100%'
                        }}/>
                    </div>

                    <div>
                        <Image
                            src='/assets/slider4.jpg'
                            style={{
                            height: `${window.innerHeight}px`,
                            width: '100%'
                        }}/>
                    </div>

                    <div>
                        <Image
                            src='/assets/slider5.jpg'
                            style={{
                            height: `${window.innerHeight}px`,
                            width: '100%'
                        }}/>
                    </div>

                </Slider>
                <Button
                    icon='left chevron'
                    circular
                    inverted
                    onClick={this.previous}
                    style={{
                    position: 'absolute',
                    left: '10px',
                    top: '400px',
                    width:'50px',
                    height:'50px'
                }}/>
                <Button
                    icon='right chevron'
                    inverted
                    circular
                    onClick={this.next}
                    style={{
                    position: 'absolute',
                    right: '10px',
                    top: '400px',
                    width:'50px',
                    height:'50px'
                }}/>
                <Header as='h1' style={{color: 'white', fontFamily:"'Aclonica', sans-serif",textShadow: '2px 2px 4px #000000'}}
                className='headerHome'> Wellcome to our events site, start exploring.</Header>
                <div
                    style={{
                    position: 'absolute',
                    top: '200px',
                    right: '0px',
                    left: '0px',
                    margin: 'auto',
                    zIndex: '500',
                    border: '2px solid white',
                    width: '400px',
                    height: '400px'
                }}><div
                        style={{
                        position: 'absolute',
                        top: '5px',
                        right: '0px',
                        left: '0px',
                        margin: 'auto',
                        zIndex: '500',
                        border: '2px solid white',
                        width: '385px',
                        height: '385px',
                        color:'white'
                    }}>
                    <div className='inner-header'>
                    <img alt='' src='assets/logoL.png' style={{width:'100', height:'100px', cursor:'pointer'}} circular
                    onClick={this.openSidebar}
                    />
                    <h1 style={{fontFamily: 'Righteous, cursive', borderRadius:'5px', textShadow: '2px 2px 4px #000000'}}>Heisenberg</h1><hr/>

                    <Button  inverted floated='right' fluid rounded
                    labelPosition='right' icon='right chevron' content='Get started'
                    onClick={(()=>this.props.history.push('/events'))}
                    style={{fontFamily: 'Righteous, cursive', fontSize:'20px', textShadow: '2px 2px 4px #000000'}}
                    ></Button>
                  
                    </div>
                    </div>
                </div>
                <div className="arrow">
                <img src="http://marcelklacan.com/images/icon.png" alt="" />
                </div>
                <div className="arrow1">
                <img src="http://marcelklacan.com/images/icon.png" alt="" />
                </div>
                <div className="arrow2">
                <img src="http://marcelklacan.com/images/icon.png" alt="" />
                </div>

                {this.state.slideOpen && <Sidebar/>}
                    
            </div>
        )
    }
}
export default withRouter(Carrousel)