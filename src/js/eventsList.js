import React, { Component } from 'react';
import './../css/eventsList.css';
import Search from './search';
import Navigation from './Navigation';
import Card from './card';
import image1 from './../images/image1.jpg'
import image2 from './../images/image2.jpg'
import image3 from './../images/image3.jpg'
import image4 from './../images/image4.jpg'
import image5 from './../images/image5.jpg'
import image6 from './../images/image6.jpg'
import image7 from './../images/image7.jpg'
import image8 from './../images/image8.jpg'

export default class EventsList extends Component {

    // On pressing the enter key on the search menu go to the events list page.
    componentDidMount(){
        let form = document.getElementById("form");

        form.addEventListener("keyup", (event) => {
            event.preventDefault();

            if(event.keyCode === 13){
                this.props.history.push('/events');
            }
        })
    }


    render() {
        return (
            <div className="App">
                <Navigation/>
                <Search/>

                <div className="searchedCards">
                    <Card image={image1} event={"Food"} description={"Searched Event"}/>
                    <Card image={image2} event={"Outdoors"} description={"Searched Event"}/>
                    <Card image={image3} event={"Technology"} description={"Searched Event"}/>
                    <Card image={image4} event={"Community"} description={"Searched Event"}/>
                    <Card image={image5} event={"Fashion"} description={"Searched Event"}/>
                    <Card image={image6} event={"Travel"} description={"Searched Event"}/>
                    <Card image={image7} event={"Photography"} description={"Searched Event"}/>
                    <Card image={image8} event={"Art"} description={"Searched Event"}/>
                </div>
            </div>
        );
    }
}