import React, { Component } from 'react';
import Navigation from './Navigation.js';
import {Button} from 'react-bootstrap';
import {FormGroup} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';
import {Navbar} from 'react-bootstrap';
import './../css/CreateEvent.css';


export default class CE extends Component{

	handleSubmit = (event) => {
		event.preventDefault()
		
		fetch('http://localhost:3001/events/add', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: event.target.elements.eventname.value,
				desc: event.target.elements.eventdescriptiion.value,
				venue: event.target.elements.eventvenue.value,
				edate: event.target.elements.eventdate.value,
				estime: event.target.elements.eventstime.value,
				eetime: event.target.elements.eventetime.value,
				eseat: event.target.elements.eventseats.value,
				ephoto: event.target.elements.eventimage.value,
				ecategory: event.target.elements.eventcategory.value,
				enumber: event.target.elements.eventnumber.value,
            }),
        })
            .then(response => response.json())
            .then(jsondata => console.log(jsondata))
            .catch((error) => {
                console.error(error);
            });
	}
	
	render() {
		return (
		<div>
		  <Navigation />	
			<div className="formev container">
				<h2 className="fieldheads title">Create An Event</h2>
				<form onSubmit={this.handleSubmit}>
				  <div className="form-group">
				  	<div className="row">
				  		<div className="col-lg-3">
						    <label for="Event_Name" >Event Title:</label>
						</div>
						<div className="col-lg-9">
						    <input type="text" className="form-control" name="eventname" required/>
					    </div>
					</div>   
				  </div>

				  <div className="form-group">
				  	<div className="row">
				  		<div className="col-lg-3">
						    <label for="D&T">Event Description:</label>
						</div>
						<div className="col-lg-9">
						    <input type="text" className="form-control" name="eventdescriptiion" required/>
					    </div>
					</div>   
				  </div>
				  
				  <div className="form-group">
				  	<div className="row">
				  		<div className="col-lg-3">
						    <label for="Venue">Venue:</label>
						</div>
						<div className="col-lg-9">
						    <input type="text" className="form-control" name="eventvenue" required/>
					    </div>
					</div>   
				  </div>

				  <div className="form-group">
				  	<div className="row">
				  		<div className="col-lg-3">
						    <label for="Des">Event Date:</label>
						</div>
						<div className="col-lg-9">
						    <input type="date" className="form-control" name="eventdate" required/>
					    </div>
					</div>   
				  </div>

				<div className="form-group">
				  	<div className="row">
				  		<div className="col-lg-3">
						    <label for="Des">Start Time:</label>
						</div>
						<div className="col-lg-9">
						    <input type="time" className="form-control" name="eventstime" required/>
					    </div>
					</div>   
				</div>

				<div className="form-group">
				  	<div className="row">
				  		<div className="col-lg-3">
						    <label for="Des">End Time:</label>
						</div>
						<div className="col-lg-9">
						    <input type="time" className="form-control" name="eventetime" required/>
					    </div>
					</div>   
				</div>
				  
				<div className="form-group">
				  	<div className="row">
				  		<div className="col-lg-3">
						    <label for="Des">Number of Seats</label>
						</div>
						<div className="col-lg-9">
						    <input type="number" className="form-control" name="eventseats" required/>
					    </div>
					</div>   
				</div>

				  <div className="form-group">
				  	<div className="row">
				  		<div className="col-lg-3">
						    <label for="UP">Upload Photos:</label>
						</div>
						<div className="col-lg-9">
						<input type="text" className="form-control" name="eventimage" required/>
						
						    {/* <input type="file" id="UP" className="btn button"/> */}
					    </div>
					</div>   
				  </div>
				<div className="form-group">
				  	<div className="row">
				  		<div className="col-lg-3">
						    <label for="Des">Category:</label>
						</div>
						<div className="col-lg-9">
						    <input type="text" className="form-control" name="eventcategory" required/>
					    </div>
					</div>   
				  </div> 

				  <div className="form-group">
				  	<div className="row">
				  		<div className="col-lg-3">
						    <label for="PN">Phone Number:</label>
						</div>
						<div className="col-lg-9">
						    <input type="text" className="form-control" name="eventnumber" required/>
					    </div>
					</div>   
				  </div>

				  <button type="submit" className="btn button">Submit</button>
				  
				</form>
				
			</div>
		</div>	
		);
	}
}