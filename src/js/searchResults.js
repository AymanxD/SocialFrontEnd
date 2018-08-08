import React, { Component } from 'react';
import axios from 'axios';
import './../css/Home.css';
import Navigation from './Navigation'
import Card from './card';
import Search from './search';
import {Link} from 'react-router-dom';

export default class SearchResults extends Component{

    constructor(props){
        super(props);

        this.state = {
            eventData: []
        }

    }

    componentDidMount(){
        const { search } = this.props.location.state;
        console.log(search);
        axios.get(`https://socialbackendweb.herokuapp.com/events/search/${search}`)
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
                console.log(this.state.eventData);
            });
    }

    render(){
        return (
            <div className="App">
                <Navigation/>
                <Search/>
                <div className="popularCards" id="searchResults">
                    {this.state.eventData.map((event, key) => (
                        <Link to={`/Event_Details/${event["idEvent"]}`}>
                            <Card key={key} image={event["event_name"]} event={event["event_name"]} description={event["event_description"]}/>
                        </Link>
                    ))}
                </div>
            </div>
        );
    }
}
