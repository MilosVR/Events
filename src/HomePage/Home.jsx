import React, {Component} from 'react'
import './Home.css'
import Carrousel from './Slider';
import EventHomeDescription from './EventHomeDescription'
import PromoSection from './PromoSection';
import {Element} from 'react-scroll'
import PriceSection from './PriceSection';
import Footer from './Footer'
export default class Home extends Component {

  render() {
    return (
      <div style={{
        position: 'relative',
        background:'SlateBlue'
      }}>
        <Carrousel/>

        <Element name='EventSection'>
        <EventHomeDescription />
        </Element>

        <Element name='PromoSection'>
        <PromoSection />
        </Element>

        <Element name='PacketPrices'>
        <PriceSection/> 
        </Element>  

        <Element name='Footer'>
        <Footer/> 
        </Element>     
      </div>
    )
  }
}
