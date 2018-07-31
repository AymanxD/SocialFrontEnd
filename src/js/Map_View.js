import React, { Component } from 'react';
import MapContainer from './Map_Container.js';

class Mapview extends Component{

    render(){
        return(
            <div>
        <MapContainer lat={this.props.location.state.lat} lng={this.props.location.state.lng}/>
        </div>
        );
    }
}

export default Mapview