import React, { Component } from 'react';
import './../css/Home.css';
import Navigation from './Navigation'
import Card from './card';
import Search from './search';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, ControlLabel, FormControl  } from 'react-bootstrap';
import './../css/Login.css';

export default class Signin extends React.Component {
   
    render() {
    
        return (
           <div id="LoginPage">
       <Navigation />
       <div class="container" id="Login" align="center">
         <div className="col-md-6 col-md-offset-3">
         <h2 className="form-signup-heading"> Please sign in </h2>
                
        <form>
        <FormGroup controlId="formBasicText" >
          <FormControl  type="text" placeholder="Enter Email" />
          <br />
          <FormControl  type="password" placeholder="Enter Password" />
          <FormControl.Feedback />
        </FormGroup>
        <Button type="submit" className="button_col" bsSize="large" block>Login</Button>
      </form>

         </div>
           </div>
         </div>
        )
    }
}