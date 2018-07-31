import React, { Component } from 'react';
import Navigation from './Navigation'
//import './../css/event_messages.css';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class messages extends Component {


    constructor(props){
        super(props);

        this.state = {
            eventData: []
        }

    }

    componentDidMount(){  
                axios.get('http://localhost:3001/event/viewcard')
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
                    //console.log(this.state.eventData)
                    //console.log(this.state.eventData[0]["event_name"])
                });
	 }

    render() {
        return (
        <div>
            <Navigation />
            <div>
             {this.state.eventData.map((event, key) => (
                        <Link to={{ pathname:`/UpdateEventForm/${event["idEvent"]}`, state:{ eventID: event["idEvent"]}}}>
                            <div class="container">
                                <p>{event["event_name"]}</p>
                            </div>
                        </Link>
                  ))}
            </div> 
          </div>
        );
    }
}