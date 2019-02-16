import React, { Component } from 'react'
import Slider from "react-slick";
import TablePromotion from './TablePromotion';
import {Segment, Image, Icon, Button} from 'semantic-ui-react'
import Zoom from 'react-reveal/Zoom'
import './PromoSection.css'

class PromoSection extends Component {
  render() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay:true
      }
    return (
      <div>
        <div 
        style={{
        width:'100%', 
        height:'65px',
        lineHeight:'65px',
        textAlign:'center', 
        background:'mediumPurple',
        color:'white', 
        fontFamily:"'Kaushan Script', cursive", 
        fontWeight:'bold',
        fontSize:'28px',
        textShadow: '2px 2px 4px #000000'
        }}> Promo code section     
        </div>

        <TablePromotion/>
        
      <div 
      style={{
      position:'relative', 
      width:'100%', 
      background:'mediumPurple', 
      display:'flex', 
      justifyContent:'center'
      }}>
        <div className='slider1' 
        style={{
            width:'200px',
            height:'200px',
            margin:'30px',
        }}
        >
        <Zoom>
        <Slider {...settings} >
        <div style={{borderRadius:'30px'}}>
          <img alt='' src='/assets/whiskey.jpeg' style={{width:'200px',height:'200px', borderRadius:'100px'}} />
        </div>
        <div>
        <img alt='' src='/assets/vodka.jpg' style={{width:'200px',height:'200px', borderRadius:'100px'}}/>
        </div>
        <div>
        <img alt='' src='/assets/cherry.png' style={{width:'200px',height:'200px', borderRadius:'100px'}}/>
        </div>
        <div>
        <img alt='' src='/assets/coconut.jpg' style={{width:'200px',height:'200px', borderRadius:'100px'}}/>
        </div>
        <div>
        <img alt='' src='/assets/grapefruit.jpg' style={{width:'200px',height:'200px', borderRadius:'100px'}}/>
        </div>
        <div>
        <img alt='' src='/assets/pineapple.png' style={{width:'200px',height:'200px', borderRadius:'100px'}}/>
        </div>
      </Slider>
      </Zoom>
        </div>

        
    <Segment style={{width:'200px', margin:'30px', background:'transparent', color:'white'}}>
    <h4 style={{fontFamily:"Roboto", fontWeight:'bold'}}>All drinks in our offers</h4><hr/>
    <p style={{textAlign:'justify'}}>All are drinks promotions you can see in our Promotion Catalog.</p>
    <Button color='green' style={{marginTop:'49px', marginLeft:'37px'}}>Find out more</Button>
    </Segment>
    <div  style={{ margin:'30px', marginTop:'70px'}}>    
    <Icon.Group size='huge'>
      <Icon loading size='big' name='circle notch' inverted/>
      <Icon name='bar' inverted/>
    </Icon.Group>
    </div>
    <Segment  style={{width:'200px', margin:'30px', background:'transparent', color:'white'}}>
    <h4 style={{fontFamily:"Roboto", fontWeight:'bold'}}>New and hot drinks</h4><hr/>
    <p style={{textAlign:'justify'}}>Checkout our Promo Section Catalog with new and hot drinks who can be added to wish your list.</p>
    <Button color='green' style={{marginTop:'31px', marginLeft:'37px'}}>Find out more</Button>
    </Segment>
 

        <div className='slider2' 
        style={{
            width:'200px',
            height:'200px',
            margin:'30px',
            position:'relative'
        }}
        >
        <Zoom>
        <Slider {...settings}>
        <div>
        <span className='PromoSectionBadge'>NEW</span>
          <Image alt='' src='/assets/whiskey.jpeg' style={{width:'200px',height:'200px', borderRadius:'100px'}}/>
        </div>
        <div>
        <span style={{background:'red', border:'1px solid red'}} className='PromoSectionBadge'>HOT</span>
        <Image alt='' src='/assets/vodka.jpg' style={{width:'200px',height:'200px', borderRadius:'100px'}}/>
        </div>
        <div>
        <span style={{background:'red', border:'1px solid red'}} className='PromoSectionBadge'>HOT</span>
        <Image alt='' src='/assets/cherry.png' style={{width:'200px',height:'200px', borderRadius:'100px'}}/>
        </div>
        <div>
        <span className='PromoSectionBadge'>NEW</span>
        <Image alt='' src='/assets/coconut.jpg' style={{width:'200px',height:'200px', borderRadius:'100px'}}/>
        </div>
        <div>
        <span className='PromoSectionBadge'>NEW</span>
        <Image alt='' src='/assets/grapefruit.jpg' style={{width:'200px',height:'200px', borderRadius:'100px'}}/>
        </div>
        <div>
        <span style={{background:'red', border:'1px solid red'}} className='PromoSectionBadge'>HOT</span>
        <Image alt='' src='/assets/pineapple.png' style={{width:'200px',height:'200px', borderRadius:'100px'}}/>
        </div>
      </Slider>
      </Zoom>
        </div>
      </div>
      </div>
    )
  }
}
export default PromoSection

