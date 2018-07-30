import React, { Component } from 'react';
import axios from 'axios';
import './../css/Home.css';
import Navigation from './Navigation'
import Card from './card';
import Categoires from './categories';
import Search from './search';
import {Link} from 'react-router-dom';
import image1 from './../images/image1.jpg'
import image2 from './../images/image2.jpg'
import image3 from './../images/image3.jpg'
import image4 from './../images/image4.jpg'
import image5 from './../images/image5.jpg'
import image6 from './../images/image6.jpg'
import image7 from './../images/image7.jpg'
import image8 from './../images/image8.jpg'

export default class Home extends Component{

    constructor(props){
        super(props);

        this.state = {
            eventData: []
        }

    }

    componentWillMount(){
        axios.get('http://localhost:3001/events/popular')
            .then((response) => {

                let events = [];
                for(let i = 0; i < response.data.length; i++){
                    events.push(response.data[i])
                }
                this.setState({
                    eventData: events
                })
            })
            .catch((error) => {
                // handle error
                console.log(error);
            })
            .then(() => {
                console.log(this.state.eventData)
                console.log(this.state.eventData[0]["event_name"])
            });
    }

    render(){
        return (
            <div className="App">
                <Navigation/>
                <Search/>
                <div className="popularCards">
                    {this.state.eventData.map((event, key) => (
                        <Link to={{ pathname:`/Event_Details/${event["idEvent"]}`, state:{ eventID: event["idEvent"]}}}>
                            <Card key={key} image={event["event_name"]} event={event["event_name"]} description={event["event_description"]}/>
                        </Link>
                    ))}
                </div>
            </div>
        );
    }
}
