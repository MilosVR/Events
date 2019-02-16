import React from 'react'
import {Card, Button, Image} from 'semantic-ui-react'

const PhotosCards = () => {
    return (
        <Card.Group>
            <Card>

                <Image src='https://react.semantic-ui.com/images/wireframe/image.png'/>

                <Card.Content
                    extra
                    style={{
                    background: '#36486b',
                    paddingLeft: '10px'
                }}>
                    <Button.Group>
                        <Button
                            inverted color='blue'
                            content='Edit'
                            compact
                            style={{
                            marginRight: '2px'
                        }}/>

                        <Button inverted color='red' content='Delete' compact/>

                    </Button.Group>
                </Card.Content>
            </Card>
        </Card.Group>
    )
}

export default PhotosCards
