import React, { Component } from 'react';
import './../css/Home.css';
import Navigation from './Navigation'
import Card from './card';
import Search from './search';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, ControlLabel, FormControl  } from 'react-bootstrap';
import './../css/Register.css';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import {Link} from 'react-router-dom';
import { Redirect } from 'react-router'

export default class Home extends Component{

 constructor(props){
        super(props);
		 this.state = { redirect: false};
    }
    
  handleSubmit = (e) => {
		e.preventDefault()

        fetch('http://localhost:3001/register', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            	email: e.target.elements.email.value,
            	password: e.target.elements.password.value,
            	date: e.target.elements.date.value,
            	repassword: e.target.elements.repassword.value,
            	name: e.target.elements.name.value,
            	address: e.target.elements.address.value,
            	location: e.target.elements.location.value,
            	phonenumber: e.target.elements.phonenumber.value,
            	interest: e.target.elements.interest.value
            }),
            })
            .then(response => response.json())
            .then((jsondata) => {

                if(jsondata.message=="User added successfully. Please login.")
                { 
                	  this.setState({redirect: true});
                }
                else{
                alert(jsondata.message); }
            })
            .catch((error) => {
                console.error(error);
            });
    }

  
    render(){
        return (
            <div className="App"  >
          <div id="RegisterPage" >
                <Navigation/>
			 <div className="container" id="Register" align="center">
         <div className="col-md-6 col-md-offset-3">
         <h2 className="form-signup-heading"> Please sign Up </h2>

        <form onSubmit={this.handleSubmit}>
        <FormGroup>
          <FormControl  type="text" placeholder="Enter Email" name="email" required/>
          <br />
          <FormControl  type="password" placeholder="Enter Password" name="password" required/>
          <br />
          <FormControl  type="password" placeholder="Re-enter Password" name="repassword"/>
          <br />
          <FormControl  type="text" placeholder="Enter Name" name="name" required/>
          <br />
		<FormControl  type="date"  name="date"/>
		<br/>
		<FormControl  type="text" placeholder="Address" name="address"/>
          <br />
          <FormControl  type="text" placeholder="Phone number" name="phonenumber" required/>
          <br />
           <FormControl  type="text" placeholder="Location" name="location" required/>
          <br />
           <FormControl  type="text" placeholder="Interest" name="interest" required/>
          <br />
          <FormControl.Feedback />
        </FormGroup>
        <Button type="submit" className="button_col" bsSize="large" block>Register</Button>
        {this.state.redirect && (<Redirect to={'/Login'}/>)}
      </form>
         </div>
           </div>

            </div>
          </div>
        );
    }
}