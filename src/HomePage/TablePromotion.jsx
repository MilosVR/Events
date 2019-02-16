import React from 'react'
import {Segment, Header, Label} from 'semantic-ui-react'

const square = {
    width: 175,
    height: 175
}

    const TablePromotion = () => (
    <Segment.Group horizontal style={{ margin:'20px'}}>
        <Segment style={{width:'30%'}}>
        <h3 
        style={{
        color:'mediumPurple', 
        fontFamily: "'Kaushan Script', cursive", 
        boxShadow: '5px 8px 18px mediumPurple inset',
        padding:'10px'
        }}>Description</h3>
        <p>Sign up for an online account
        In order to receive the code, you must first complete the form emailed to you once you have registered an account
        The 20% discount code can then be used on your next order</p>
        </Segment>

        <Segment style={{width:'30%'}}>
        <h3 style={{
        color:'mediumPurple', 
        fontFamily: "'Kaushan Script', cursive", 
        boxShadow: '5px 8px 18px mediumPurple inset',
        padding:'10px'
        }}>Promo Code and Details</h3>
        <p>Use code CANSAVE15 Cannot be combined with other offers</p></Segment>
        <Segment>
        <h3 style={{
        color:'mediumPurple',
        fontFamily: "'Kaushan Script', cursive", 
        boxShadow: '5px 8px 18px mediumPurple inset',
        padding:'10px'
        }}>Duration</h3> 
        <p>Now - 9/30/2018</p> </Segment>
        <Segment style={{width:'6%', background:'mediumPurple'}}>
            <Segment
                    circular
                    style={square}>
                     <Header as='h2' style={{color:'mediumPurple', fontFamily:"'Poiret One', cursive"}}>
                    Free coupon <hr/>
                         <Header.Subheader style={{color:'mediumPurple'}}><Label color='green'>100.00$</Label></Header.Subheader>
                    </Header>
                </Segment>
            </Segment>
        </Segment.Group>
)

export default TablePromotion
