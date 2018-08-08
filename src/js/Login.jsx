import React, { Component } from 'react';
import './../css/Home.css';
import Navigation from './Navigation'
import { Button, FormGroup,FormControl  } from 'react-bootstrap';
import './../css/Login.css';
import { Redirect } from 'react-router'

export default class Signin extends Component {
   
   constructor(props){
        super(props);
		 this.state = { redirect: false};
    }
    handleSubmit = (e) => {
		e.preventDefault()

        fetch('http://socialbackendweb.herokuapp.com/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            	email: e.target.elements.email.value,
            	password: e.target.elements.password.value
            }),
            })
            .then(response => response.json())
            .then((jsondata) => {

                if(jsondata.message==="Login successful")
                { 
                    sessionStorage.setItem('session', jsondata.email)
                    sessionStorage.setItem('userid', jsondata.Userid)
                    sessionStorage.setItem('username', jsondata.Username)
                    console.log(sessionStorage)
                	this.setState({redirect: true});
                }
                else{
                alert(jsondata.message); }
            })
            .catch((error) => {
                console.error(error);
            });

    }
   
   
    render() {
    
        return (
           <div id="LoginPage">
       <Navigation />
       <div className="container" id="Login" align="center">
         <div className="col-md-6 col-md-offset-3">
         <h2 className="form-signup-heading"> Please sign in </h2>
                
        <form onSubmit={this.handleSubmit}>
        <FormGroup>
          <FormControl  type="text" placeholder="Enter Email" name="email" required/>
          <br />
          <FormControl  type="password" placeholder="Enter Password" name="password" required/>
          <FormControl.Feedback />
        </FormGroup>
        <Button type="submit"  className="button_col"  bsStyle="warning" bsSize="large" block>Login</Button>
                    {this.state.redirect && (<Redirect to={'/'}/>)}
      </form>

         </div>
           </div>
         </div>
        )
    }

}