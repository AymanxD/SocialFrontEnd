import React, { Component } from 'react';
import './../css/Home.css';
import Navigation from './Navigation'
import Card from './card';
import Categoires from './categories';
import Search from './search';
import {Link} from 'react-router-dom';
import {FormGroup, FormControl, ControlLabel, HelpBlock, Button} from 'react-bootstrap';


export default class EditProfile extends Component{

    constructor(props){
        super(props);
        this.fileUpload.bind(this);
    }

    componentDidMount(){

        // On pressing the enter key on the search menu go to the events list page.
        let form = document.getElementById("form");

        form.addEventListener("keyup", (event) => {
            event.preventDefault();

            if(event.keyCode === 13){
                this.props.history.push('/events');
            }
        });

        fetch('https://socialbackendweb.herokuapp.com/users', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: 'Ayman@awesome.com',
                favouriteSong: 'What is love?',
            }),
        })
            .then(response => response.json())
            .then(jsondata => console.log(jsondata))
            .catch((error) => {
                console.error(error);
            });

        fetch('https://socialbackendweb.herokuapp.com/users')
            .then(response => response.json())
            .then(jsondata => console.log(jsondata))
            .catch((error) => {
                console.error(error);
            });


        fetch('http://localhost:3001/events')
            .then(response => response.json())
            .then(jsondata => console.log(jsondata))
            .catch((error) => {
                console.error(error);
            });

        // let fileUpload = document.getElementById('imageUpload');
    }

    fileUpload = (event) =>{
        event.preventDefault();
        event.stopPropagation();

        let image = event.target.elements[0].files[0];
        let formData = new FormData();
        formData.append('file', image);
        // formData.append('upload_preset', UPLOAD_PRESET);


        fetch('http://localhost:3001/imageID', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-wwww-form-urlencoded'
        },
        body: formData,
    })
    .then(response => response.json())
        .then(jsondata => alert(jsondata.success))
        
        .catch((error) => {
            console.error(error);
        });
    };

    render(){
        return (
            <div className="App">
                <Navigation/>
                <Search/>

                <form onSubmit={(e) =>{e.preventDefault(); this.fileUpload(e); }}>
                    <FormGroup
                        controlId="imageUpload"
                    >
                        <ControlLabel>Upload an image</ControlLabel>
                        <FormControl
                            type="file"
                            placeholder="Enter text"
                        />
                        <FormControl.Feedback />
                        <HelpBlock>Validation is based on string length.</HelpBlock>
                    </FormGroup>
                    <Button type="submit" id="fileUpload">Submit</Button>
                </form>

            </div>
        );
    }
}