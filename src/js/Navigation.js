import React, { Component } from 'react';
import './../css/navigation.css';
import {Link} from 'react-router-dom';
import {Nav, NavItem, Navbar} from 'react-bootstrap';
import logo from './../images/logo.png';


// Navigation component to route user to other webpage.
export default class Navigation extends Component {
    constructor(props){
        super(props);
        this.state = {};  
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
            sessionStorage.clear(); 
            this.setState({loggedIn: false});
        }

    render() {
        return (
            <Navbar className="navigate" collapseOnSelect>
                <Navbar.Header>
                        <Link to="/"><img src={logo} className="Logo" alt="logo" /></Link>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav bsStyle="pills" className="Navi" pullRight>
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


                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}