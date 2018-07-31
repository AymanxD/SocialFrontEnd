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
       message:''
   };
}

   componentDidMount(){
        this.getMessages();
   }


    getMessages = _ => {
        fetch('http://localhost:3001/messages/view')
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
		
		fetch('http://localhost:3001/messages/add', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                
				
				chat_message: event.target.elements.message.value,
            }),
        })
            .then(response => response.json())
            .catch((error) => {
                console.error(error);
            });
            
    }
	render() {
		return (
            <div className="container">
              {this.state.jsondata.map((datas, key) => 
              <li key={key}>{datas.chat_message}</li>)}
              <form onSubmit={(e) => this.addMessage(e)}>
                    <input type="text" name="message"/>
                    <button type="submit">Send</button>
              </form>
            </div>
		);
	}
}