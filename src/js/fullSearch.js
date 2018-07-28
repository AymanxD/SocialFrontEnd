import React, { Component, Link } from 'react';
import './../css/search.css';
import {FormGroup, FormControl, ControlLabel} from 'react-bootstrap';
import Navigation from './Navigation'
import Card from './card';
import axios from 'axios';


export default class FullSearch extends Component {

    constructor(props){
        super(props);
        this.state = {
            province: "",
            city: "",
            searchLength: 1,
            searchKey: "",
            searchedData: [],
            filteredData: []
        };

        this.handleSearchChange = this.handleSearchChange.bind(this);
        // this.search = this.search.bind(this);
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

    componentDidMount(){
        // On pressing the enter key on the search menu go to the events list page.
        let form = document.getElementById("form");

        form.addEventListener("keyup", (event) => {
            event.preventDefault();
            if(document.getElementById("searchResults")){
            }
            else if(event.keyCode === 13){
                this.search(this.state.searchKey)
            }
        });

        let events = [];

        axios.get(`http://localhost:3001/events`)
            .then((response) => {

                for(let i = 0; i < response.data.length; i++){
                    events.push(response.data[i])
                }
                console.log(events);
            })
            .catch((error) => {
                console.log(error);
            })
            .then(() => {
                this.setState({
                    searchedData: events
                });
                console.log(this.state.searchedData[0]);
            });

        console.log(this.state.searchedData);

    }

    search = (query) => {
        axios.get(`http://localhost:3001/events/search/`)
            .then((response) => {

                let events = [];
                for(let i = 0; i < response.data.length; i++){
                    events.push(response.data[i])
                }
                this.setState({
                    filteredData: events
                })
            })
            .catch((error) => {
                console.log(error);
            })
            .then(() => {
                console.log(this.state.searchData);
            });
    };

    handleSearchChange = (e) => {
        this.setState({searchKey: e.target.value})
    };


    render() {
        return (
            <div>
                <Navigation/>
                <FormGroup
                    controlId="formBasicText"
                    id="form"
                >
                    <FormControl
                        className="search"
                        type="text"
                        placeholder="Search for an Event!"
                        onChange={(e) => this.handleSearchChange(e)}
                    />
                    <FormControl.Feedback />
                    <a href="/Categories"><button type="button" className="btn btn_category pop" data-container="body"
                                                  data-toggle="popover" data-placement="bottom"
                                                  data-original-title="" title="">Categories</button>
                    </a>
                </FormGroup>
                <p className="locationLabel">{this.state.city}, {this.state.province}</p>
                <div className="popularCards" id="searchResults">
                    {this.state.searchedData.map((event, key) => (
                            <Card key={key} image={event["event_name"]} event={event["event_name"]} description={event["event_description"]}/>

                    ))}
                </div>
            </div>
        );
    }
}

          //             <Link to={`/Event_Details/${event["idEvent"]}`}>
//                             <Card key={key} image={event["event_name"]} event={event["event_name"]} description={event["event_description"]}/>
//                         </Link>