import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, { Component } from 'react';
 
export class MapContainer extends Component {
  render() {
    return (
      <Map google={this.props.google} zoom={14} initialCenter={{
        lat: 44.636581,
        lng: -63.591656
      }}>
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyBR6HN-MOmQNQfS_0WnGg7oUGiZJ9-DMRY")
})(MapContainer)