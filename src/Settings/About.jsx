import React, {Component} from 'react'
import { Grid, Image, Card, Icon, Segment } from 'semantic-ui-react'

const extra = (
  <a>
    <Icon name='user' />
    16 Friends
  </a>
)

export default class About extends Component {
  render() {
    return (
      <Segment>
      <Grid >
        <Grid.Row>
          <Grid.Column width={4}>
            <Card
              image='/assets/logo.png'
              header='Elliot Baker'
              meta='Friend'
              description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
              extra={extra}/>
          </Grid.Column>
          <Grid.Column width={12}>
            <Image
              src='https://react.semantic-ui.com/images/wireframe/centered-paragraph.png'/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      </Segment>
    )
  }
}
