import React, { Component } from 'react';
import Navigation from './Navigation.js';
import {Button} from 'react-bootstrap';
import {FormGroup} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';
import {Navbar} from 'react-bootstrap';
import './../css/CreateEvent.css';
import { appendFile } from 'fs';


export default class Chat extends Component{
    constructor(props){
        super(props)
        this.addMessage = this.addMessage.bind(this);
    this.state ={
       jsondata:[],
       message: []
   };
}

   componentDidMount(){
        this.getMessages();
   }


    getMessages = _ => {
        const { eventID } = this.props.location.state;
        fetch(`http://socialbackendweb.herokuapp.com/messages/view/${eventID}`)
        .then(response => response.json())
			.then(jsondata => {
				this.setState({jsondata});
				//console.log(this.state.jsondata);
			})
			.catch((error) => {
				console.error(error);
			})
    }

    addMessage = (event) => {
        event.preventDefault();
        console.log(event.target.elements);
		
		fetch('http://socialbackendweb.herokuapp.com/messages/add', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                
				
                chat_message: event.target.elements.message.value,
                idEvent: event.target.elements.eventid.value,

                idEvent: this.state.jsondata[0].idEvent,
            }),
        })
            .then(response => response.json())
            .catch((error) => {
                console.error(error);
            });
            window.location.reload(true);
    }


	render() {
		return (
            <div className="container1">
            <h2>Testing Chat</h2>
            <hr/>
              {this.state.jsondata.map((datas, key) => 
              <li key={key}>{datas.chat_message}</li>)}
              <br/>
              <br/>
              <form onSubmit={(e) => this.addMessage(e)}>
                    <input type="text" name="message"/>
                    {this.state.jsondata.map((datas, key) =>
                    <input type="hidden" name="eventid" value={datas.idEvent}/>)}
                    <button type="submit">Send</button>
              </form>
            </div>
		);
	}
}