import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, { Component } from 'react';
 
export class MapContainer extends Component {
  render() {
    return (
      <Map google={this.props.google} zoom={14} initialCenter={{
        lat: this.props.lat,
        lng: this.props.lng
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