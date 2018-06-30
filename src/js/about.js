import React, { Component } from 'react';
import './../css/about.css';
import Navigation from './Navigation'
import Search from './search';

export default class About extends Component {

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

    // Description of Social.
    render() {
        return (
            <div id="aboutPage">
                <Navigation/>
                <Search/>
                <div id="about" className="container">
                    <h4>
                        Social is an event based web application where users can look for events
                        happening around them and also create an event of any type  to meet new
                        people, have fun and socialize.
                    </h4>

                    <br/>

                    <h4>
                        If you have any questions, feel free to contact us at social@social.com
                    </h4>

                    <br/>

                    <h4>
                        Regards,
                        <br/>
                        Social team
                    </h4>
                </div>
            </div>
        );
    }
}
