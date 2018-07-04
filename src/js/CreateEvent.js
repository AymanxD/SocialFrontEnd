import React, { Component } from 'react';
import Navigation from './Navigation.js';
import {Button} from 'react-bootstrap';
import {FormGroup} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';
import {Navbar} from 'react-bootstrap';
import './../css/CreateEvent.css';


export default class CE extends Component{
	render() {
		return (
		<div>
		  <Navigation />	
			<div className="formev container">
				<h2 className="fieldheads title">Create An Event</h2>
				<form>
				  <div className="form-group">
				  	<div className="row">
				  		<div className="col-lg-3">
						    <label for="Event_Name" >Event Title:</label>
						</div>
						<div className="col-lg-9">
						    <input type="text" className="form-control" id="Event_Name" />
					    </div>
					</div>   
				  </div>

				  <div className="form-group">
				  	<div className="row">
				  		<div className="col-lg-3">
						    <label for="D&T">Date & Timings:</label>
						</div>
						<div className="col-lg-9">
						    <input type="text" className="form-control" id="D&T" />
					    </div>
					</div>   
				  </div>
				  
				  <div className="form-group">
				  	<div className="row">
				  		<div className="col-lg-3">
						    <label for="Venue">Venue:</label>
						</div>
						<div className="col-lg-9">
						    <input type="text" className="form-control" id="Venue" />
					    </div>
					</div>   
				  </div>

				  <div className="form-group">
				  	<div className="row">
				  		<div className="col-lg-3">
						    <label for="Des">Description:</label>
						</div>
						<div className="col-lg-9">
						    <input type="text" className="form-control" id="Des" />
					    </div>
					</div>   
				  </div>

				  <div className="form-group">
				  	<div className="row">
				  		<div className="col-lg-3">
						    <label for="UP">Upload Photos:</label>
						</div>
						<div className="col-lg-9">
						    <input type="file" id="UP" className="btn button"/>
					    </div>
					</div>   
				  </div>
				</form>  
		</div>
		<div className="formev container">	
				<form>	  
				  <h2 className="fieldheads title">Contact Details</h2>	
				  <div className="form-group">
				  	<div className="row">
				  		<div className="col-lg-3">
						    <label for="Name">Name:</label>
						</div>
						<div className="col-lg-9">
						    <input type="text" className="form-control" id="Name" />
					    </div>
					</div>   
				  </div>

				  <div className="form-group">
				  	<div className="row">
				  		<div className="col-lg-3">
						    <label for="PN">Phone Number:</label>
						</div>
						<div className="col-lg-9">
						    <input type="text" className="form-control" id="PN" />
					    </div>
					</div>   
				  </div>

				  <div className="form-group">
				  	<div className="row">
				  		<div className="col-lg-3">
						    <label for="City">City:</label>
						</div>
						<div className="col-lg-9">
						    <input type="text" className="form-control" id="City" />
					    </div>
					</div>   
				  </div>
				  <div class="checkbox">
				    <label><input type="checkbox" /> Remember me</label>
				  </div>
				  <button type="submit" className="btn button">Submit</button>
				</form>
			</div>
		</div>	
		);
	}

}