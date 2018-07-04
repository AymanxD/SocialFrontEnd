import React, { Component } from 'react';
import './../css/navigation.css';
import {Link} from 'react-router-dom';
import {Nav, NavItem} from 'react-bootstrap';
import logo from './../images/logo.png';


// Navigation component to route user to other webpage.
export default class Navigation extends Component {
    render() {
        return (
            <div className="Navi">
                <Link to="/"><img src={logo} className="Logo" alt="logo" /></Link>
                <Nav bsStyle="pills" className="Navi">
                    <NavItem eventKey={1} href="/">
                        Home
                    </NavItem>
                    <NavItem eventKey={1} href="/">
                        Sign in
                    </NavItem>
                    <NavItem eventKey={1} href="/">
                        Sign Up
                    </NavItem>
                    <NavItem eventKey={2} href="/about">
                        About
                    </NavItem>
                    <NavItem eventKey={3} href="/Profile">
                        Profile
                    </NavItem>
                </Nav>
            </div>
        );
    }
}