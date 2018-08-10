import React, { Component } from 'react';
import './../css/Home.css';
import Navigation from './Navigation'
import { Button, FormGroup, FormControl  } from 'react-bootstrap';
import './../css/Register.css';
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import { Redirect } from 'react-router'

export default class Home extends Component{

 constructor(props){
        super(props);
		 this.state = { redirect: false};
    }
    
  handleSubmit = (event) => {
        event.preventDefault()
        
        let data = new FormData();

        data.append('file', event.target.elements.image.files[0]);
		data.append('email', event.target.elements.email.value);
		data.append('password', event.target.elements.password.value);
		data.append('repassword', event.target.elements.repassword.value);
		data.append('bdate', event.target.elements.date.value);
		data.append('name', event.target.elements.name.value);
		data.append('address', event.target.elements.address.value);
		data.append('location', event.target.elements.location.value);
		data.append('phonenumber', event.target.elements.phonenumber.value);
		data.append('interest', event.target.elements.interest.value);
		
		
        fetch('http://localhost:3001/register', {
            method: 'POST',
            body: data
            })
            .then(response => response.json())
            .then((jsondata) => {

                if(jsondata.message==="User added successfully. Please login.")
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
          <FormControl type="file" name="image" accept="image/*" className="btn button" required />
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