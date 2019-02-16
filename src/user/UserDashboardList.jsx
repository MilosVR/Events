import React from 'react'
import {Item, List, Image, Label} from 'semantic-ui-react'

const UserDashboardList = (props) => {

  return (

    <List.Item style={{cursor:'pointer'}}
    onClick={props.deleteDashboardList(props.cocktail.id) }>
      <Item.Group>
        <Item >
          <Image src={props.cocktail.image} circular height={70} width={70}/>
          <Item.Content verticalAlign='middle'>
            <Item.Header as='a'>{props.cocktail.name}</Item.Header><hr/>
            <Item.Description>
              Value: <Label color='green' size='mini'><b>{props.cocktail.cost} $</b></Label>, <br/>
              Calories: <Label color='orange' size='mini'><b>{props.cocktail.calories} kcal</b></Label>
            </Item.Description>
          </Item.Content>
        </Item>
      </Item.Group>
    </List.Item>
  )
}
export default UserDashboardList