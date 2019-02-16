import React, {Component} from 'react'
import {
  Grid,
  Segment,
  Header,
  Icon,
  Image,
} from 'semantic-ui-react'
import PhotosCards from './PhotosCards'
import Dropzone from 'react-dropzone';
import Cropper from 'react-cropper'
import 'cropperjs/dist/cropper.css'

export default class Photos extends Component {
  state = {
    files: [],
    fileNme: '',
    cropResult: null,
    image: {}
  }
  onDrop = (files) => {
    console.log('files: ', files);

    this.setState({files, fileName: files[0].name})
  }
  cropImage = () => {
    if (typeof this.refs.cropper.getCroppedCanvas() === 'undefined') {
      return
    }
    this
      .refs
      .cropper
      .getCroppedCanvas()
      .toBlob(blob => {
        let imageUrl = URL.createObjectURL(blob)
        this.setState({cropResult: imageUrl, image: blob})
      }, 'image/jpeg');
  }
  render() {
    return (
      <Segment>
        <Header as='h1' content='Photos'/>
        <hr/>
        <Grid divided='vertically'>
          <Grid.Row style={{
            marginTop: '15px'
          }} columns={3}>

            <Grid.Column
              textAlign='center'
              style={{
              minHeight: '260px'
            }}>
              <Header
                as='h3'
                style={{
                color: 'dodgerBlue',
                textAlign: 'center'
              }}
                content='Step 1'
                subheader='Description for step 1'/>
              <hr/>
              <div
                style={{
                position: 'absolute',
                left: '38px'
              }}>
                <Dropzone onDrop={this.onDrop} multiple={false}>
                  <div style={{
                    marginTop: '30px'
                  }}>
                    <Icon name='upload' size='huge' color='blue'/>
                    <Header style={{
                      color: '#2185d0'
                    }}>Drag and drop your image here</Header>
                  </div>
                </Dropzone>
              </div>

            </Grid.Column>

            <Grid.Column>
              <Header
                as='h3'
                style={{
                color: 'dodgerBlue',
                textAlign: 'center'
              }}
                content='Step 2'
                subheader='Description for step 2'/><hr/>
              <div style={{}}>

                {this.state.files[0] && <Cropper
                  ref='cropper'
                  src={this.state.files[0].preview}
                  style={{
                  height: 200,
                  width: '100%'
                }}
                  aspectRatio={1}
                  viewMode={0}
                  dragMode='move'
                  scalable={true}
                  guides={false}
                  cropBoxMovable={true}
                  cropBoxResizable={true}
                  crop={this.cropImage}/>}

              </div>
            </Grid.Column>

            <Grid.Column>
              <Header
                as='h3'
                style={{
                color: 'dodgerBlue',
                textAlign: 'center'
              }}
                content='Step 3'
                subheader='Description for step 3'/><hr/> {this.state.files[0] && <Image
                style={{
                maxHeight: '200px',
                minWidth: '100%'
              }}
                src={this.state.cropResult}/>
}

            </Grid.Column>
          </Grid.Row>

        </Grid>
        <Grid.Row/>
        <Header as='h1' content='Your Photos'/>
        <hr/>
        <Grid divided='vertically'>
          <Grid.Row style={{
            marginTop: '15px',
            marginRight:'15px'
          }} columns={5}>

            <Grid.Column textAlign='center'>
              <Header as='h3' content='Default Pic'/>
              <PhotosCards/>
            </Grid.Column>

            <Grid.Column textAlign='center'>
            <Header as='h3' content='Default Pic'/>
              <PhotosCards/>
            </Grid.Column>
            <Grid.Column textAlign='center'>
            <Header as='h3' content='Default Pic'/>
              <PhotosCards/>
            </Grid.Column>
            <Grid.Column textAlign='center'>
            <Header as='h3' content='Default Pic'/>
              <PhotosCards/>
            </Grid.Column>
            <Grid.Column textAlign='center'>
            <Header as='h3' content='Default Pic'/>
              <PhotosCards/>
            </Grid.Column>

          </Grid.Row>
        </Grid>
      </Segment>
    )
  }
}
