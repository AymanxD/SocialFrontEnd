import React, { Component, Link } from 'react';
import './../css/search.css';
import {FormGroup, FormControl, ControlLabel} from 'react-bootstrap';


export default class Search extends Component {

    // Save user location is state
    constructor(props){
        super(props);
        this.state = {
            province: "",
            city: "",
            searchLength: 1,
        };
    }

    // Retrieve user location from Navigator and Google Maps API
    componentWillMount(){

        let success = (position) => {
            console.log(position);
            console.log('latitude', position.coords.latitude,
                'longitude', position.coords.longitude);

            let url = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + position.coords.latitude +
                ","+ position.coords.longitude + "&key=AIzaSyDL_DjnE9q6JJsh0XYeIY_gBnEwqshp2_0";

            fetch(url)
                .then((response) => response.json())
                .then((responseJson) => {
                    console.log(responseJson);
                    this.setState({
                        province: responseJson.results[0].address_components[6].short_name,
                        city: responseJson.results[0].address_components[3].long_name
                    });

                })
                .catch((error) => {
                    console.error(error);
                });
        };

        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(success,
                function error(error) {
                    console.error(error);
                }
            );
        } else {
            console.log('geolocation is not enabled on this browser')
        }

    }


    render() {
        return (
            <div>
                <FormGroup
                    controlId="formBasicText"
                    id="form"
                >
                    <FormControl
                        className="search"
                        type="text"
                        placeholder="Search for an Event!"
                    />
                    <FormControl.Feedback />
                    <a href="/Categories"><button type="button" className="btn btn_category pop" data-container="body"
                    data-toggle="popover" data-placement="bottom"
  					data-original-title="" title="">Categories</button></a>
                </FormGroup>
                <p className="locationLabel">{this.state.city}, {this.state.province}</p>
            </div>
        );
    }
}