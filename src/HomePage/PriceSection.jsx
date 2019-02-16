import { Image } from 'semantic-ui-react';
import Zoom from 'react-reveal/Zoom'
import Bounce from 'react-reveal/Bounce'
import './Home.css'

import React, { Component } from 'react'

export default class PriceSection extends Component {

    state={
        discountStart:0,
        discountEnd:30
    }

    discountStartToFinish = () => {
        if (this.state.discountStart<this.state.discountEnd) {
            this.setState({
                discountStart:this.state.discountStart + 1
            })
        }
    }
    componentDidUpdate(){
        setTimeout(() => {
            this.discountStartToFinish()
        }, 30);
    }

  render() {
      console.log(this.state.discountStart);
      
    return (
        <div style={{
            background:'#373636',
            position:'relative',
            zIndex:'200',
            height:'600px'
        }}>
        <div style={{
            background:'DodgerBlue', 
            color:'white',
            height:'65px',
            lineHeight:'65px',
            textAlign:'center',
            fontFamily: "'El Messiri', sans-serif", 
            fontWeight:'bold',
            fontSize:'28px',
            textShadow: '2px 2px 4px #000000'
            }}>
            Prices and disscount
            
        </div>
        <Bounce right delay={500}>

          
          <span style={{color:'white', position:'absolute', right:'10px', top:'130px', fontSize:'24px', fontFamily:'Roboto', textShadow: '2px 2px 4px #000000'}}>
          With a <span style={{color:'orange', fontSize:'32px',fontFamily: 'Righteous, cursive'}}>Premium Account,
          </span> you can <span style={{fontFamily:"'Aladin', cursive", fontSize:'38px'}}>enjoy</span> a range of <br/> <br/>
          <span style={{color:'orange', fontSize:'32px',fontFamily: 'Righteous, cursive'}}>exclusive benefits,</span> 
          to help your daily needs and <span style={{fontFamily:"'Aladin', cursive", fontSize:'38px'}}>user expirience.</span>
          </span>
            
          </Bounce>
          <div style={{
            color:'white',
            display:'flex',
            justifyContent:'center',
            marginTop:'100px',
            height:'400px',
        }}>
    
          <div style={styleUp} className='hoverPriceSection'>
            <div 
            style={{transform:'rotate(-45deg)', 
            color:'black',
            marginLeft: '63px',
            marginTop: '56px',
        }}>
    
            <span style={{fontSize:'25px', color:'SpringGreen',fontFamily:"'El Messiri', sans-serif"}}>$</span>
            <span style={{fontSize:'50px', color:'orange',fontFamily:"'El Messiri', sans-serif"}}>69</span>
            <span style={{fontSize:'25px',color:'orange',fontFamily:"'El Messiri', sans-serif"}}>.99</span>
    
            <div 
            style={{
            width:'100px', 
            borderRadius:'30%', 
            border:'none', 
            height:'50px', 
            lineHeight:'50px', 
            textAlign:'center',
            background:'orange',
            color:'black',
            marginTop:'20px',
            fontSize:'20px',
            fontWeight:'bold',
            fontFamily:"'El Messiri', sans-serif"
        }}>One year</div>
            </div>
        </div>
    
          <div style={styleDawn} >
          <Image fluid alt="" src='/assets/promotions.jpg' style={{height:'196px', weight:'196px'}}/>
          </div>
    
          <div style={styleUp} className='hoverPriceSection'>
          <div 
            style={{transform:'rotate(-45deg)', 
            color:'black',
            marginLeft: '50px',
            marginTop: '62px',
        }}>
    
            <span style={{fontSize:'25px', color:'SpringGreen', fontFamily:"'El Messiri', sans-serif"}}>$</span>
            <span style={{fontSize:'50px', color:'orange', fontFamily:"'El Messiri', sans-serif"}}>145</span>
            <span style={{fontSize:'25px',color:'orange', fontFamily:"'El Messiri', sans-serif"}}>.99</span>
    
            <div 
            style={{
            width:'100px', 
            borderRadius:'30%', 
            border:'none', 
            height:'50px', 
            lineHeight:'50px', 
            textAlign:'center',
            background:'orange',
            color:'black',
            marginTop:'20px',
            fontSize:'20px',
            fontWeight:'bold',
            marginLeft: '17px',
            fontFamily:"'El Messiri', sans-serif"
        }}>Two year</div>
            </div>
          </div>
          <div style={styleDawn} className='hoverPriceSection'>
          <div 
            style={{transform:'rotate(-45deg)', 
            color:'black',
            marginLeft: '50px',
            marginTop: '62px',
        }}>
    
            <span style={{fontSize:'25px', color:'SpringGreen', fontFamily:"'El Messiri', sans-serif"}}>$</span>
            <span style={{fontSize:'50px', color:'orange', fontFamily:"'El Messiri', sans-serif"}}>249</span>
            <span style={{fontSize:'25px',color:'orange', fontFamily:"'El Messiri', sans-serif"}}>.99</span>
    
            <div 
            style={{
            width:'100px', 
            borderRadius:'30%', 
            border:'none', 
            height:'50px', 
            lineHeight:'50px', 
            textAlign:'center',
            background:'orange',
            color:'black',
            marginTop:'20px',
            fontSize:'20px',
            fontWeight:'bold',
            marginLeft: '17px', fontFamily:"'El Messiri', sans-serif"
        }}>Three year</div>
            </div>
          </div>
          <Zoom onReveal={()=>this.discountStartToFinish()}>
          <div style={styleCircle}>
          <div style={{marginTop: '88px', marginLeft: '29px',}}>
          <span style={{
          color:'cyan',
          marginLeft:'18px',
          marginTop:'20px', 
          fontSize:'60px',

          }}><b>{this.state.discountStart}%</b></span><br/><br/>

          <span style={{
          color:'cyan',
          marginLeft:'20px',
          fontSize:'30px',
          padding:'15px'
          }}><b>FREE</b></span>
          </div>
          </div>
          </Zoom>
          </div>
    
        </div>
    )
  }
}

const styleUp={
    width:'200px', 
    height:'200px', 
    transform:'rotate(45deg)', 
    border:'2px solid aqua	',
    background:'black',
    boxShadow: '5px 10px 18px cyan',
    position:'relative',
}
const styleDawn={
    width:'200px', 
    height:'200px', 
    transform:'rotate(45deg)', 
    border:'2px solid aqua	',
    marginTop:'120px',
    background:'black',
    boxShadow: '5px 10px 18px cyan',
}
const styleCircle = {
    width:'200px', 
    height:'200px', 
    borderRadius:'50%', 
    border:'1px solid aqua',
    marginLeft: '150px',
    marginTop: '100px',
    background:'black',
    boxShadow: '5px 8px 18px aqua inset'
}
