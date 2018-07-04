import React, { Component } from 'react';
import Navigation from './Navigation'
import './../css/Profile.css';

class Profile extends Component{
    render(){
        return(
            <div id="profilePage">
                <Navigation />
                <div id ="profile" className="container">
                    <div className="row">
                     <div className="col">
                
                     <h1> Profile Page</h1>
                     <div className="row">
                            <div className="col" align="center">
                            <img id="avatar" className="img-responsive" src={require('../images/profile.jpg')} alt="profile img" />
                            </div>
                        </div>
                        <hr>
                        </hr>
                       
                            <form align="center">
                            <div className="row">
                                <div className="col-xs-6 col-sm-6 col-md-6">
                                    <div className="form-group" id="text-al">
                                        <label>Name:</label>
                                    </div>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6">
                                    <div className="form-group" id="text-al">
                                    <input type="text" name="user_name" id="user_name" className="form-control" placeholder="Dummy Name" />
                                    </div>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6">
                                    <div className="form-group" id="text-al">
                                        <label>Birth Date:</label>
                                    </div>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6">
                                    <div className="form-group" id="text-al">
                                    <input type="text" name="BirthDate" id="Birthdate" className="form-control" placeholder="Dummy Date" />
                                    </div>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6">
                                    <div className="form-group" id="text-al">
                                        <label>Location:</label>
                                    </div>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6">
                                    <div className="form-group" id="text-al">
                                    <input type="text" name="Location" id="Location" className="form-control" placeholder="Dummy Location" />
                                    </div>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6">
                                    <div className="form-group" id="text-al">
                                        <label>Interests:</label>
                                    </div>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6">
                                    <div className="form-group" id="text-al">
                                    <input type="text" name="interests" id="interests" className="form-control" placeholder="Dummy Data" />
                                    </div>
                                </div>
                                <div className="col-xs-3 col-sm-3 col-md-3">
                                    <div className="form-group"id="text-al">
                                    </div>
                                </div>
                                <div className="col-xs-3 col-sm-3 col-md-3">
                                    <div className="form-group" id="text-al">
                                    <button type="button" class="btn btn-block btn-lg btn-primary">Edit</button>
                                    </div>
                                </div>
                                <div className="col-xs-3 col-sm-3 col-md-3">
                                    <div className="form-group" id="text-al">
                                    <input type="button" class="btn btn-block btn-lg btn-primary" value="Back" onclick="location.href='#'"/>
                                    </div>
                                </div>
                                </div>
                            </form>
                            </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile
