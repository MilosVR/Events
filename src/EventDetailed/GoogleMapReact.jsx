import React from 'react'
import GoogleMapReact from 'google-map-react';
import { Icon } from 'semantic-ui-react'

  const Marker = () => <Icon name='marker' size='large' color='red'/>

  const SimpleMap = ({lat,lng}) => {

    let center = [lat,lng]
    let zoom = 15

    return (
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBe9T1uUvzoXRxYnhw0VsJG4GcSUKGXxXM' }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
          <Marker
            lat={lat}
            lng={lng}
          />
        </GoogleMapReact>
    ) 
}
export default SimpleMap
