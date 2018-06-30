import React, { Component } from 'react';
import './../css/card.css';


// Event card used to represent each event.
export default class Card extends Component {
    render() {
        return (
            <a className="card">
                <img src={this.props.image} className="cardImage" alt="logo" />
                <h3>{this.props.event}</h3>
                <p> {this.props.description} </p>
            </a>
        );
    }
}