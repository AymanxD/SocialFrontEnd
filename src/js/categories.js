import React, { Component } from 'react';
import './../css/categories.css';
import Navigation from './Navigation'
import Card from './card';
import Search from './search';
import image1 from './../images/image1.jpg'
import image2 from './../images/image2.jpg'
import image3 from './../images/image3.jpg'
import image4 from './../images/image4.jpg'
import image5 from './../images/image5.jpg'
import image6 from './../images/image6.jpg'
import image7 from './../images/image7.jpg'
import image8 from './../images/image8.jpg'

import {Link} from 'react-router-dom';

export default class categories extends Component{

    componentDidMount(){

        // On pressing the enter key on the search menu go to the events list page.
        let form = document.getElementById("form");

        form.addEventListener("keyup", (event) => {
            event.preventDefault();

            if(event.keyCode === 13){
                this.props.history.push('/events');
            }
        })
    }

    render(){
        return (
            <div className="App">
                <Navigation/>

                <Search/>
                <h2> Categories</h2>                
                <div className="popularCards">
                    <Link to={{ pathname:"/Category", state:{ category:"Food"}}}><Card image={image1} event={"Food Events"}/></Link>
                    <Link to={{ pathname:"/Category", state:{ category:"Outdoor"}}}><Card image={image2} event={"Outdoor Events"} /></Link>
                    <Link to={{ pathname:"/Category", state:{ category:"Technological"}}}><Card image={image3} event={"Technological Events"} /></Link>
                    <Link to={{ pathname:"/Category", state:{ category:"Community"}}}><Card image={image4} event={"Community Events"} /></Link>
                    <Link to={{ pathname:"/Category", state:{ category:"Fashion"}}}><Card image={image5} event={"Fashion Events"} /></Link>
                    <Link to={{ pathname:"/Category", state:{ category:"Travel"}}}><Card image={image6} event={"Travel Events"} /></Link>
                    <Link to={{ pathname:"/Category", state:{ category:"Photography"}}}><Card image={image7} event={"Photography Events"} /></Link>
                    <Link to={{ pathname:"/Category", state:{ category:"Art"}}}><Card image={image8} event={"Art Events"} /></Link>
                </div>
            </div>
        );
    }
}