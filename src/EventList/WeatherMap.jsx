import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { Icon } from 'semantic-ui-react';

const Marker = () => <Icon name='marker' size='large' color='red'></Icon>;


class SimpleMap extends Component {

  render() {
    let lat = this.props.lat
    let lon = this.props.lon
    let center = [lat, lon]
    let zoom = 15
    
    return (
      
      <div style={{ height: '200px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:'AIzaSyBe9T1uUvzoXRxYnhw0VsJG4GcSUKGXxXM'}}
          center={center}
          defaultZoom={zoom}
        >
          <Marker
            lat={lat}
            lng={lon}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
