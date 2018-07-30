import React, { Component } from 'react';
import Navigation from './Navigation'
import './../css/Profile.css';
import axios from 'axios';
import './../css/Home.css';
import Card from './card';
import UpdateEventForm from './UpdateEventForm';

import {Link} from 'react-router-dom';

class Profile extends Component{
   constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            jsondata:[],
            eventData: [],
            events:[],
            disable:true,
            user_name: ""
        };
    }
    handleClick(e){

    this.setState({disable:!this.state.disable})
    }

handleChange(e){
    this.setState({user_name: e.target.elements.user.value})
}

    handleSubmit = (event) => {
		//event.preventDefault();
		
		fetch('http://localhost:3001/profile/edit', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user_name: event.target.elements.user.value,
				birth_date: event.target.elements.BirthDate.value,
				Location: event.target.elements.Location.value,
				Interests: event.target.elements.interests.value,
				email: event.target.elements.email.value,
				contact: event.target.elements.number.value,
                password: event.target.elements.password.value,
            }),
            })
            .then(response => response.json())
            .then(jsondata => console.log(jsondata))
            .catch((error) => {
                console.error(error);
            });
	}
	 componentDidMount(){
		fetch('http://localhost:3001/profile/view')
			.then(response => response.json())
			.then(jsondata => {
				this.setState({jsondata});
                //console.log(this.state.jsondata);
                
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
			})
			.catch((error) => {
				console.error(error);
			})
	 }
   
    render(){
        return(
            <div id="profilePage">
                <Navigation />
                <div id ="profile" className="container">
                    <div className="row">
                     <div className="col">
                
                     <h1> Profile Page</h1>
                     <div className="row">
                            <div className="col" align="center">

                            <img id="avatar" name = "image" className="img-responsive" src={require('../images/profile.jpg')} alt="profile img" />

                            </div>
                        </div>
                        <hr>
                        </hr>
                       
                            <form align="center" action ="Profile.js" onSubmit={(e) => {this.handleSubmit(e)}}>
                            <div className="row">
                                <div className="col-xs-6 col-sm-6 col-md-6">
                                    <div className="form-group" id="text-al">
                                        <label>Name:</label>
                                    </div>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6">
                                    <div className="form-group" id="text-al">
                                    {this.state.jsondata.map(datas => 
                                    <input type="text" name="user" id="user_name" 
                                    disabled={this.state.disable}
                                    className="form-control" placeholder={datas.user_name} 
                                    required/>)}
                                    </div>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6">
                                    <div className="form-group" id="text-al">
                                        <label>Birth Date:</label>
                                    </div>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6">
                                    <div className="form-group" id="text-al">
                                    {this.state.jsondata.map(datas => 
                                    <input type="text" name="BirthDate" id="Birthdate" 
                                    className="form-control" placeholder={datas.user_birthdate}
                                     disabled={this.state.disable} required/>)}
                                    </div>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6">
                                    <div className="form-group" id="text-al">
                                        <label>Location:</label>
                                    </div>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6">
                                    <div className="form-group" id="text-al">
                                    {this.state.jsondata.map(datas => 
                                    <input type="text" name="Location" id="Location"
                                     className="form-control" placeholder={datas.user_address}
                                      disabled={this.state.disable} required/>)}
                                    </div>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6">
                                    <div className="fosrm-group" id="text-al">
                                        <label>Interests:</label>
                                    </div>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6">
                                    <div className="form-group" id="text-al">
                                     {this.state.jsondata.map(datas => 
                                    <input type="text" name="interests" id="interests" 
                                    className="form-control" placeholder={datas.user_interests} 
                                     disabled={this.state.disable} required/>)}
                                    </div>
                                </div>
                                 <div className="col-xs-6 col-sm-6 col-md-6">
                                    <div className="form-group" id="text-al">
                                        <label>Email:</label>
                                    </div>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6">
                                    <div className="form-group" id="text-al">
                                     {this.state.jsondata.map(datas => 
                                    <input type="text" name="email" id="email" 
                                    className="form-control" placeholder={datas.user_email}
                                     disabled={this.state.disable} required/>)}
                                    </div>
                                </div>
                                 <div className="col-xs-6 col-sm-6 col-md-6">
                                    <div className="form-group" id="text-al">
                                        <label>Contact:</label>
                                    </div>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6">
                                    <div className="form-group" id="text-al">
                                     {this.state.jsondata.map(datas => 
                                    <input type="text" name="number" id="number" 
                                    className="form-control" placeholder={datas.user_number}
                                     disabled={this.state.disable} required/>)}
                                    </div>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6">
                                    <div className="form-group" id="text-al">
                                        <label>Password:</label>
                                    </div>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6">
                                    <div className="form-group" id="text-al">
                                     {this.state.jsondata.map(datas => 
                                    <input type="text" name="password" id="password" 
                                    className="form-control" placeholder={datas.user_password} 
                                     disabled={this.state.disable} required/>)}
                                    </div>
                                </div>
                                <div className="col-xs-3 col-sm-3 col-md-3">
                                    <div className="form-group"id="text-al">
                                    </div>
                                </div>
                                <div className="col-xs-3 col-sm-3 col-md-3">
                                    <div className="form-group" id="text-al">
                                    <button type="button" onClick={this.handleClick.bind(this)} 
                                    class="btn btn-block btn-lg btn_primary">Edit</button>


                                    </div>
                                </div>
                                <div className="col-xs-3 col-sm-3 col-md-3">
                                    <div className="form-group" id="text-al">
                                    <input type="submit" class="btn btn-block btn-lg btn_primary" value="Submit"/>
                                    
                                    </div>
                                </div>
                                </div>
                            </form>
                            </div>
                            <h3>My Events</h3>
                            <div className="popularCards">
                    {this.state.eventData.map((event, key) => (
                        <Link to={{ pathname:`/UpdateEventForm/${event["idEvent"]}`, state:{ eventID: event["idEvent"]}}}>
                            <Card key={key} image={event["event_name"]} event={event["event_name"]} description={event["event_description"]}/>
                        </Link>
                    ))}
                </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile
