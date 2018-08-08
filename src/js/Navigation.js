import React, { Component } from 'react';
import './../css/navigation.css';
import {Link} from 'react-router-dom';
import {Nav, NavItem, Navbar} from 'react-bootstrap';
import logo from './../images/logo.png';
import { Redirect } from 'react-router'


// Navigation component to route user to other webpage.
export default class Navigation extends Component {
    constructor(props){
        super(props);
        this.state = {};
        this.state = { redirect: false};
        this.handleLogout = this.handleLogout.bind(this);
    }
    componentDidMount(){
        if(sessionStorage.getItem('session')){
             console.log(sessionStorage.getItem('session'))
            this.setState({loggedIn: true}); 
            
            }
            else{
                this.setState({loggedIn: false}); 
            } 
        }

        handleLogout(){
            
            fetch('http://socialbackendweb.herokuapp.com/logout', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
            body: JSON.stringify({
            	email: sessionStorage.getItem('session'),
            }),
            })
            .then(response => response.json())
            .then((jsondata) => {
				console.log(jsondata);
                if(jsondata.message==="Logged out!!")
                { 
           	 	sessionStorage.clear(); 
            	this.setState({loggedIn: false});
            	this.setState({redirect: true});
                }
            })
            .catch((error) => {
                console.error(error);
            });

   		}  
            
            
            

    render() {
        return (
     <div>
            <Navbar className="navigate" collapseOnSelect>
                <Navbar.Header>
                        <Link to="/"><img src={logo} className="Logo" alt="logo" /></Link>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav bsStyle="pills" className="Navi" pullRight>
                    
                      {(this.state.loggedIn) ? 
                      
                      <div className="welcome">
                            Welcome {(sessionStorage.getItem('username'))}!
                        </div>
                      
                      : null}
                    
                        <NavItem eventKey={1} href="/" className="NavItem">
                            Home
                        </NavItem>
                        {(this.state.loggedIn) ? 
                        <NavItem eventKey={3} href="/Profile">
                        Profile
                         </NavItem> :  
                        <NavItem eventKey={1} href="/Login">
                         Sign in
                        </NavItem>
                        }

                     {(this.state.loggedIn) ? 
                     <NavItem eventKey={3} href="/CreateEvent">
                     Create Event
                     </NavItem>: 
                    <NavItem eventKey={1} href="/Register">
                        Sign Up
                    </NavItem>
                        }
                        
                        {(this.state.loggedIn) ? 
                     <NavItem onClick={this.handleLogout}>
                     Logout
                     </NavItem>: null}
                            {(this.state.loggedIn) ? 
                        <NavItem eventKey={3} href="/messages">
                            My Messages
                        </NavItem>:null}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
             {this.state.redirect && (<Redirect to={'/'}/>)}
              
        </div>    
        );
    }
}