import React from 'react'
import {Item, List, Image, Label} from 'semantic-ui-react'

const BucketList = (props) => {
  return (
    <List.Item onClick={
      props.deleteBucket(props.findDashboardList.id)
      } 
      style={{cursor:'pointer'}} >
      <Item.Group>
        <Item >
          <Image src={props.findDashboardList.image} circular height={70} width={70}/>
          <Item.Content verticalAlign='middle'>
            <Item.Header as='a'>{props.findDashboardList.name}</Item.Header><hr/>
            <Item.Description>
              Value: <Label color='green' size='mini'><b>{props.findDashboardList.cost} $</b></Label>, <br/>
              Calories: <Label color='orange' size='mini'><b>{props.findDashboardList.calories} kcal</b></Label>
            </Item.Description>
          </Item.Content>
        </Item>
      </Item.Group>
    </List.Item>
  )
}
export default BucketList