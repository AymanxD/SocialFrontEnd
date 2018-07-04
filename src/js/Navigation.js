import React, { Component } from 'react';
import './../css/navigation.css';
import {Link} from 'react-router-dom';
import {Nav, NavItem, Navbar} from 'react-bootstrap';
import logo from './../images/logo.png';


// Navigation component to route user to other webpage.
export default class Navigation extends Component {
    render() {
        return (
            <div className="Navi">
            <Navbar.Header>
                <Navbar.Brand>
                <Link to="/"><img src={logo} className="Logo" alt="logo" /></Link>
                </Navbar.Brand>
                <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                <Nav bsStyle="pills" className="Navi">
                    <NavItem eventKey={1} href="/" className="NavItem">
                        Home
                    </NavItem>
                    <NavItem eventKey={1} href="/Login">
                        Sign in
                    </NavItem>
                    <NavItem eventKey={1} href="/Register">
                        Sign Up
                    </NavItem>
                    <NavItem eventKey={2} href="/about">
                        About
                    </NavItem>
                    <NavItem eventKey={3} href="/Profile">
                        Profile
                    </NavItem>
                </Nav>
                </Navbar.Collapse>
            </div>
        );
    }
}