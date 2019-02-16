import React, {Component} from 'react'
import {Input, Form, Grid, Segment, Image, Header, Button} from 'semantic-ui-react';
import EventGalleryItem from './EventGalleryItem'
import './EventGallery.css'
import EditorChoice from './EditorChoice';

export default class EventGallery extends Component {

    state={
        images:[
            {id:1, image:'/assets/editor1.jpg', user:'Mark214', downloads:'215', likes:'269',views:'125' },
            {id:2, image:'/assets/editor2.jpg', user:'Josh22', downloads:'3235', likes:'236',views:'89' },
            {id:3, image:'/assets/editor3.jpg', user:'Denis', downloads:'141', likes:'457',views:'63' },
            {id:4, image:'/assets/editor4.jpg', user:'Silvia', downloads:'359', likes:'56',views:'128' },
            {id:5, image:'/assets/editor5.jpg', user:'Tom225', downloads:'852', likes:'23',views:'148' },
            {id:6, image:'/assets/editor6.jpg', user:'Milos', downloads:'327', likes:'99',views:'186' },
            {id:7, image:'/assets/editor7.jpg', user:'Kika', downloads:'125', likes:'56',views:'126' },
            {id:8, image:'/assets/editor8.jpg', user:'Al-0055', downloads:'568', likes:'12',views:'228' },
            {id:9, image:'/assets/editor9.jpg', user:'Nicole', downloads:'325', likes:'128',views:'229' },
            {id:10, image:'/assets/editor10.jpg', user:'Lucia', downloads:'238', likes:'166',views:'187' },
            {id:11, image:'/assets/editor11.jpg', user:'Meggi', downloads:'212', likes:'156',views:'296' },
            {id:12, image:'/assets/editor12.jpg', user:'Caroline', downloads:'457', likes:'123',views:'258' },
            {id:13, image:'/assets/editor13.jpg', user:'Aurorra', downloads:'218', likes:'128',views:'289' },
            {id:14, image:'/assets/editor14.jpg', user:'Heisenberg', downloads:'248', likes:'56',views:'59' },
            {id:15, image:'/assets/editor15.jpg', user:'Enigma', downloads:'165', likes:'38',views:'59' },
            {id:16, image:'/assets/editor16.jpg', user:'Elena', downloads:'212', likes:'323',views:'89' },
            {id:17, image:'/assets/editor17.jpg', user:'Stephan124', downloads:'242', likes:'232',views:'111' },
            {id:18, image:'/assets/editor18.jpg', user:'Ian', downloads:'454', likes:'12',views:'59' },
            {id:19, image:'/assets/editor19.jpg', user:'Walter', downloads:'124', likes:'21',views:'555' },
            {id:20, image:'/assets/editor20.jpg', user:'Rick215', downloads:'128', likes:'215',views:'96' },
        ]
    }

    render() {

        return (
            
        <Grid container >
                <Grid.Column width={16}>
                    <Segment style={{height:'300px', overflow:'hidden', position:'relative'}}>
                    <Image src='/assets/backgroundGallery.png' style={{height:'100%', width:'100%'}}/>    
                    <Header style={{
                        textAlign:'center', 
                        color:'white', 
                        zIndex:'200', 
                        position:'absolute', 
                        fontFamily:'Kaushan Script, cursive',
                        fontSize:'35px',
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%,-50%)',
                        textShadow: '2px 2px 4px #000000'
                        }}>Stunning Free Images<hr/>

                        <Header.Subheader style={{
                            fontSize:'25px', 
                            fontFamily:'Poiret One, cursive', 
                            color:'white', 
                            fontWeight:'bold',
                            textShadow: '2px 2px 4px #000000'
                            }}>
                        Over 1.5 million royalty free stock photos and videos shared by our generous community.</Header.Subheader>
                    </Header>
                    </Segment>
                        <Form onSubmit={this.props.handleSubmitTerm}>
                            <Segment style={{height:'160px', overflow:'hidden'}}>
                            <Image src='/assets/backgroundGallery.png' fluid 
                            style={{transform: 'rotate(180deg)', height:'100%', width:'100%'}}/>    
                            <Input
                                onChange={this.props.handleSearchTerm}
                                value={this.props.searchTerm}
                                placeholder='Search and download all types of images for FREE'
                            
                               
                                style={{
                                    left: '50%',
                                    top: '50%',
                                    transform: 'translate(-50%,-50%)',
                                    zIndex:'200',
                                    position:'absolute',
                                    width:'700px',
                                    height:'50px',
                                    verticalAlign:'middle',
                                }}
                                />
                                <Button  
                                    style={{
                                        left:'78%',
                                        top: '50%',
                                        transform: 'translate(-50%,-50%)',
                                        zIndex:'200',
                                        position:'absolute',
                                        width:'100px',
                                        height:'50px',
                                        verticalAlign:'middle',
                                        
                                    }}>Search</Button>

                            </Segment>
                        </Form>
                </Grid.Column>


            
            <Grid.Row centered columns={3} style={{marginLeft:'25px', marginRight:'-25px'}}>
                   {this.props.images.length > 0 ?  this.props.images.map((img) => {
                     return (
                     <Grid.Column key={img.id}>   
                     <EventGalleryItem  img={img} />
                     </Grid.Column>
                    )
                })
                : this.state.images.map((img) => {
                    return (
                    <Grid.Column key={img.id}>   
                    <EditorChoice  img={img} />
                    </Grid.Column>
                   )
               })
            }
    </Grid.Row>
    </Grid>
         
        )
    }
}
