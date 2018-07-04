import React, { Component } from 'react';
import './../css/Home.css';
import Navigation from './Navigation'
import Card from './card';
import Search from './search';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, ControlLabel, FormControl  } from 'react-bootstrap';
import './../css/Register.css';

export default class Home extends Component{

    render(){
        return (
            <div className="App"  >
          <div id="RegisterPage" >
                <Navigation/>


				 <div className="container" id="Register" align="center">
         <div className="col-md-6 col-md-offset-3">
         <h2 className="form-signup-heading"> Please sign Up </h2>
                
        <form>
        <FormGroup controlId="formBasicText">
          <FormControl  type="text" placeholder="Enter Email" />
          <br />
          <FormControl  type="password" placeholder="Enter Password" />
          <br />
          <FormControl  type="password" placeholder="Re-enter Password" />
          <br />
          <FormControl  type="text" placeholder="Enter Name" />
          <br />
          <FormControl.Feedback />
        </FormGroup>
        <Button type="submit" bsStyle="warning" bsSize="large" block>Register</Button>
      </form>

         </div>
           </div>
               
            </div>
          </div>
        );
    }
import React, { Component } from 'react';
import './../css/Home.css';
import Navigation from './Navigation'
import Card from './card';
import Search from './search';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, ControlLabel, FormControl  } from 'react-bootstrap';
import './../css/Register.css';

export default class Home extends Component{

    render(){
        return (
            <div className="App"  >
          <div id="RegisterPage" >
                <Navigation/>


				 <div className="container" id="Register" align="center">
         <div className="col-md-6 col-md-offset-3">
         <h2 className="form-signup-heading"> Please sign Up </h2>
                
        <form>
        <FormGroup controlId="formBasicText">
          <FormControl  type="text" placeholder="Enter Email" />
          <br />
          <FormControl  type="password" placeholder="Enter Password" />
          <br />
          <FormControl  type="password" placeholder="Re-enter Password" />
          <br />
          <FormControl  type="text" placeholder="Enter Name" />
          <br />
          <FormControl.Feedback />
        </FormGroup>
        <Button type="submit" bsStyle="warning" bsSize="large" block>Register</Button>
      </form>

         </div>
           </div>
               
            </div>
          </div>
        );
    }
}