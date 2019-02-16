import {
  Grid,
  Image,
  Segment,
  Header,
  Reveal,
  List,
  Progress,
  Icon,
  Label,
  Input,
  Form,
  Button,
  Message,
} from 'semantic-ui-react'

import UserDashboardList from './UserDashboardList';
import BucketList from './BucketList'
import React, {Component} from 'react'
import {cocktailList} from './cocktailJSON'
import './UserDashboard.css'

export default class UserDashBoard extends Component {

  state = {
    cocktail: cocktailList,
    calories: 0,
    bucketItem: [],
    promoInput:'',
    isCodeValid:false,
    isCodeTrue:false 
  }

  deleteDashboardList = (id) => () => {
    let filteredCocktail = this
      .state
      .cocktail
      .filter((item) => {
        return item.id !== id
      })
    let findDashboardList = this
      .state
      .cocktail
      .find((item) => {
        return item.id === id
      })

    this.setState({
      cocktail: filteredCocktail,
      bucketItem: this
        .state
        .bucketItem
        .concat(findDashboardList)
    })
  }
  deleteBucket = (id) => () => {
    let filteredBucket = this.state.bucketItem && this
      .state
      .bucketItem
      .filter((item) => {
        return item.id !== id
      })
    let findBucketItem = this
      .state
      .bucketItem
      .find((item) => {
        return item.id === id
      })
    this.setState({
      bucketItem: filteredBucket,
      cocktail: this
        .state
        .cocktail
        .concat(findBucketItem)
    })
  }
  totalCalories = () => {
    let totalCalories = 0
    this
      .state
      .bucketItem
      .map(item => totalCalories += item.calories)
    return totalCalories
  }
  cost = () => {
    let cost = 0
    this
      .state
      .bucketItem
      .map(item => cost += item.cost)
    return cost
  }
  addRemovePromoMoney = () => {
    let cost = 100
    this
      .state
      .bucketItem
      .map(item => cost -= item.cost)
    return cost
  }
  promoInputChange=(e)=>{
    this.setState({
      promoInput:e.target.value
    })
  }
  promoCodSubmit=(e)=>{
    e.preventDefault()
    let code = '454-4545-4gf9'
    setTimeout(() => {
      if (this.state.promoInput === code) {
        this.setState({
          isCodeValid:true,
          isCodeTrue:false
        })
      }else{
        this.setState({
          isCodeTrue:true
        })
      }
    }, 2000);
  }
  render() {
    return (
      <Segment>
        <Segment>
          <Image
            fluid
            src='/assets/promoBackground.jpg'
            style={{
            height: '500px'
          }}/>
          <Image src='/assets/vip.png' 
          style={{position:'absolute', left:'15px', top:'15px', width:'200px', height:'120px'}}/>
          <Header
            as='h1'
            style={{
            position: 'absolute',
            bottom: '100px',
            left: '120px',
            color: 'white',
            zIndex: '100'
          }}>
            Have a great party weekend with our Promo prices.</Header><br/>
          <Header
            as='h3'
            style={{
            position: 'absolute',
            bottom: '70px',
            left: '120px',
            color: 'white',
            zIndex: '100'
          }}>
            Just clicked on Promo and get your
            <a style={{
              cursor: 'pointer'
            }}>
              Promo code
            </a>
            with 100$ for buying are products.
          </Header><br/>

          <Grid>
            <Grid.Column
              width={13}
              style={{
              position: 'absolute',
              left: '5px',
              top: '100px'
            }}></Grid.Column>
            <Grid.Column
              width={3}
              style={{
              position: 'absolute',
              right: '5px',
              top: '200px'
            }}>
              <Reveal animated='rotate'>
                <Reveal.Content visible>
                  <Image circular src='/assets/promo.jpg' width={200} height={100}/>
                </Reveal.Content>
                <Reveal.Content hidden>
                  <Image circular src='/assets/promoBackground.jpg' width={200} height={100}/>
                  <p
                    style={{
                    position: 'absolute',
                    top: '40px',
                    left: '35px',
                    color: 'white',
                    fontSize: '16px'
                  }}>
                    <b>454-4545-4gf9</b>
                  </p>
                </Reveal.Content>
              </Reveal>
            </Grid.Column>
          </Grid>
        </Segment>

{!this.state.isCodeValid && 
        <Segment
          textAlign='center'
          style={{
          background: 'linear-gradient(to bottom, rgba(73,155,234,1) 0%, rgba(32,124,229,1) 100%)'
        }}> 
            <Form onSubmit={this.promoCodSubmit} >
            <span style={{color:'white', fontSize:'18px', marginRight:'5px', fontFamily: 'Righteous, cursive' }}>
            Activate your promo code and start shopping </span>
            <Input 
            value={this.state.promoInput}
            onChange={this.promoInputChange}
            type='text' 
            placeholder='Enter your code' 
            style={{height:'30px', marginRight:'5px'}}/> 
            <Button style={{lineHeight:'9px', background:'rgb(218, 165, 32)', color:'white'}}>Submit</Button>
            </Form> 
        </Segment>}
            {this.state.isCodeTrue && <Message style={{textAlign:'center'}} 
            error header='Action Forbidden, please anter a valid Promo-code and start shopping'/>}

{this.state.isCodeValid && 
  <div>
        <Segment
          textAlign='center'
          style={{
          background: 'linear-gradient(to bottom, rgba(73,155,234,1) 0%, rgba(32,124,229,1) 100%)'
        }}>
          <Header as='h2' style={{
            color: 'white'
          }}>
            Start spending your
            <Label
              color='green'
              tag
              size='big'
              style={{
              marginRight: '10px',
              marginLeft: '25px'
            }}>
              {this.addRemovePromoMoney()}
              $</Label>
            promotion
          </Header>
        </Segment>

        <Grid divided='vertically' textAlign='center'>
          <Grid.Row columns={3}>

            <Grid.Column>
              <Segment
                style={{
                background: '#DAA520',
                color: 'white',
                fontSize: '20px'
              }}>
                <b>Cocktail</b>
              </Segment>
              <List celled>
                {this
                  .state
                  .cocktail
                  .map((item) => {
                    return <Segment key={item.name}>
                      <UserDashboardList
                        deleteDashboardList={this.deleteDashboardList}
                        removePromoMoney={this.removePromoMoney}
                        cocktail={item}/>
                    </Segment>
                  })
}
              </List>
            </Grid.Column>

            <Grid.Column>
              <Segment
                style={{
                background: '#DAA520',
                color: 'white',
                fontSize: '20px'
              }}>
                <b>Bucket</b>
              </Segment>
              <List celled>
                {this.state.bucketItem.length > 0
                  ? this
                    .state
                    .bucketItem
                    .map((item) => {
                      return <Segment key={item.name}>
                        <BucketList
                          findDashboardList={item}
                          deleteBucket={this.deleteBucket}
                          addPromoMoney={this.addPromoMoney}/>
                      </Segment>
                    })
                  : <Segment
                    style={{
                    background: 'linear-gradient(rgb(73, 155, 234) 0%, rgb(32, 124, 229) 100%)',
                    height:'100px',
                    cursor:'pointer'
                  }}>
                    <span className='text-shompingBag-outline'>
                      Your shopping bag is 
                    </span>
                    <span className='text-shompingBag-outline2'>empty!</span>
                    
                  </Segment>}
              </List>

            </Grid.Column>
            <Grid.Column>
              <Segment
                style={{
                background: '#DAA520',
                color: 'white',
                fontSize: '20px'
              }}>
                <b>Calories</b>
              </Segment>

              <Segment>kcal {this.totalCalories() > 1000
                  ? <Segment
                      style={{
                      marginTop: '8px',
                      background: 'red',
                      color: 'white',
                      fontSize: '17px',
                      
                    }}>
                      <b>To much calories</b>
                    </Segment>
                  : <Progress
                    indicating
                    value={this.totalCalories()}
                    total='1000'
                    progress='value'
                    disabled={false}
                    style={{
                    marginTop: '13px',
                    marginBottom: '14px',  
                  }}/>}
              </Segment>
            </Grid.Column>

            {this.cost() > 0 && <Grid.Column>
              <Segment
                inverted
                basic
                color='green'
                style={{
                cursor: 'pointer',
                position: 'fixed',
                top: '400px',
                right: '0px',
                width: '200px',
                height: '50px'
              }}>
                <Icon name='shopping cart'/>
                <b style={{
                  marginRight: '5px'
                }}>Shopping Cart</b>
                {this.cost() <= 100
                  ? <Segment
                      style={{
                      marginTop: '25px',
                      width: '100px',
                      left: '33px',
                      background: 'orange',
                      color: 'white'
                    }}>
                      Total: {this.cost()}
                      $</Segment>

                  : <Segment
                    style={{
                    marginTop: '25px',
                    width: '173px',
                    height: '50px',
                    background: 'red',
                    color: 'white'
                  }}>
                    You are over the Limit</Segment>}
              </Segment>
            </Grid.Column>}

          </Grid.Row>
        </Grid>
        </div>
      }
      </Segment>
    )
  }
}
