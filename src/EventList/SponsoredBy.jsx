import React from 'react'
import { Segment, Button, Icon, Item } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

const SponsoredBy = () => {
  return (
      <div>
      <Segment attached='top' style={{
                textShadow: 'rgb(0, 0, 0) 2px 2px 4px', 
                fontFamily:'Aclonica, sans-serif',
                color:'white',
                background:"rgb(60, 179, 113)"
                }}>Sponsored by</Segment>
    <Segment attached>

        <Item.Group>
        <Item>
            <Item.Image src='/assets/pixabay.png' style={{width:'80px', height:'80px'}} />
                <Item.Content>
                    <Item.Header as='a'>Pixabay</Item.Header>
                    <Item.Meta>
                        <span className='cinema'>Checkout our Gallery, and download FREE some of our images</span>
                    </Item.Meta>
                    <Item.Description>www.pixabay.com</Item.Description>
                    <Item.Extra>
                        <Link to='/gallery'>
                        <Button primary floated='right'>
                        Go to Gallery
                        <Icon name='right chevron' />
                        </Button>
                        </Link>
                    </Item.Extra>
                </Item.Content>
        </Item>
        </Item.Group>

    </Segment>
    </div>
  )
}

export default SponsoredBy

