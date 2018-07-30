import React, { Component } from 'react';
import Navigation from './Navigation.js';
import {Button} from 'react-bootstrap';
import {FormGroup} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';
import {Navbar} from 'react-bootstrap';
import './../css/CreateEvent.css';


export default class CE extends Component{
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            jsondata:[],
            disable:true
        };
    }

	handleSubmit = (event) => {
		event.preventDefault()
		
		fetch('http://localhost:3001/event/updateform', {
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
            .then(jsondata => alert(jsondata.message))
            .catch((error) => {
                console.error(error);
            });
            window.location.reload(true);
    }
    
    componentDidMount(){
		fetch('http://localhost:3001/event/viewform')
			.then(response => response.json())
			.then(jsondata => {
				this.setState({jsondata});
				//console.log(this.state.jsondata);
			})
			.catch((error) => {
				console.error(error);
			})
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
                        {this.state.jsondata.map(datas => 
						    <input type="text" className="form-control" name="eventname" placeholder={datas.event_name} required/>)}
					    </div>
					</div>   
				  </div>

				  <div className="form-group">
				  	<div className="row">
				  		<div className="col-lg-3">
						    <label for="D&T">Event Description:</label>
						</div>
						<div className="col-lg-9">
                        {this.state.jsondata.map(datas => 
						    <input type="text" className="form-control" name="eventdescriptiion" placeholder={datas.event_description} required/>)}
					    </div>
					</div>   
				  </div>
				  
				  <div className="form-group">
				  	<div className="row">
				  		<div className="col-lg-3">
						    <label for="Venue">Venue:</label>
						</div>
						<div className="col-lg-9">
                        {this.state.jsondata.map(datas => 
						    <input type="text" className="form-control" name="eventvenue" placeholder={datas.event_address} required/>)}
					    </div>
					</div>   
				  </div>

				  <div className="form-group">
				  	<div className="row">
				  		<div className="col-lg-3">
						    <label for="Des">Event Date:</label>
						</div>
						<div className="col-lg-9">
                        {this.state.jsondata.map(datas => 
						    <input type="date" className="form-control" name="eventdate" placeholder={datas.event_date} required/>)}
					    </div>
					</div>   
				  </div>

				<div className="form-group">
				  	<div className="row">
				  		<div className="col-lg-3">
						    <label for="Des">Start Time:</label>
						</div>
						<div className="col-lg-9">
                        {this.state.jsondata.map(datas => 
						    <input type="time" className="form-control" name="eventstime" placeholder={datas.start_time} required/>)}
					    </div>
					</div>   
				</div>

				<div className="form-group">
				  	<div className="row">
				  		<div className="col-lg-3">
						    <label for="Des">End Time:</label>
						</div>
						<div className="col-lg-9">
                        {this.state.jsondata.map(datas => 
						    <input type="time" className="form-control" name="eventetime" placeholder={datas.end_time} required/>)}
					    </div>
					</div>   
				</div>
				  
				<div className="form-group">
				  	<div className="row">
				  		<div className="col-lg-3">
						    <label for="Des">Number of Seats</label>
						</div>
						<div className="col-lg-9">
                        {this.state.jsondata.map(datas => 
						    <input type="number" className="form-control" name="eventseats" placeholder={datas.event_seat} required/>)}
					</div>   
				</div>

				  <div className="form-group">
				  	<div className="row">
				  		<div className="col-lg-3">
						    <label for="UP">Upload Photos:</label>
						</div>
						<div className="col-lg-9">
                        {this.state.jsondata.map(datas => 
						<input type="text" className="form-control" name="eventimage" placeholder={datas.event_image} required/>)}
						
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
                        {this.state.jsondata.map(datas => 
						    <input type="text" className="form-control" name="eventcategory" placeholder={datas.category_name} required/>)}
					    </div>
					</div>   
				  </div> 

				  <div className="form-group">
				  	<div className="row">
				  		<div className="col-lg-3">
						    <label for="PN">Phone Number:</label>
						</div>
						<div className="col-lg-9">
                        {this.state.jsondata.map(datas => 
						    <input type="text" className="form-control" name="eventnumber" placeholder={datas.event_contact} required/>)}
					    </div>
					</div>   
				  </div>

				  <button type="submit" className="btn button">Submit</button>
				  </div>
				</form>
				
			</div>
		</div>	
		);
	}
}