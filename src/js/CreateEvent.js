import React, { Component } from 'react';
import Navigation from './Navigation.js';
import './../css/CreateEvent.css';


export default class CE extends Component{
	handleSubmit = (event) => {
		event.preventDefault()
		let data = new FormData();
		data.append('file', event.target.elements.image.files[0]);
		data.append('name', event.target.elements.eventname.value);
		data.append('desc', event.target.elements.eventdescriptiion.value);
		data.append('venue', event.target.elements.eventvenue.value);
		data.append('edate', event.target.elements.eventdate.value);
		data.append('estime', event.target.elements.eventstime.value);
		data.append('eetime', event.target.elements.eventetime.value);
		data.append('eseat', event.target.elements.eventseats.value);
		data.append('ecategory', event.target.elements.eventcategory.value);
		data.append('enumber', event.target.elements.eventnumber.value);
		
		fetch('https://socialbackendweb.herokuapp.com/events/add', {
            method: 'POST',
            body:  data
		
        })
            .then(response => response.json())
            .then(jsondata => alert(jsondata.message))
            .catch((error) => {
				console.log(event.target)
				console.error(error);
            });
	}
	
	render() {
		return (
		<div>
		  <Navigation />	
			<div className="formev container">
				<h2 className="fieldheads title">Create An Event</h2>
				<form onSubmit={this.handleSubmit} encType="multipart/form-data">
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
						<input type="file" id="image" name="image"  accept="image/*" className="btn button" required/>
					    </div>
					</div>   
				  </div>
				<div className="form-group">
				  	<div className="row">
				  		<div className="col-lg-3">
						    <label for="Des">Category:</label>
						</div>
						<div className="col-lg-9">  
						<select className="form-control" name="eventcategory">
							<option>Food Event</option>
							<option>Outdoor Event</option>
							<option>Technological Event</option>
							<option>Community Event</option>
							<option>Fashion Event</option>
							<option>Travel Event</option>
							<option>Art Event</option>
							<option>Others</option>
						</select>
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