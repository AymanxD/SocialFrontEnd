import React, { Component } from 'react';
import Navigation from './Navigation'
import './../css/Profile.css';

class Profile extends Component{
   constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            jsondata:[],
            disable:true
        };
    }
    handleClick(e){

    this.setState({disable:!this.state.disable})
    }

handleChange(e){
    this.setState({user_name: e.target.elements.user.value})
}

    handleSubmit = (event) => {
		event.preventDefault()
		
		fetch('http://localhost:3001/profile/edit', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user_name: event.target.elements.user.value,
				birth_date: event.target.elements.BirthDate.value,
				Location: event.target.elements.Location.value,
				Interests: event.target.elements.interests.value,
				email: event.target.elements.email.value,
				contact: event.target.elements.number.value,
                password: event.target.elements.password.value,
                image: event.target.elements.image.value,
            }),
        })
            .then(response => response.json())
            .then(jsondata => console.log(jsondata))
            .catch((error) => {
                console.error(error);
            });
	}
	 componentDidMount(){
		fetch('http://localhost:3001/profile/view')
			.then(response => response.json())
			.then(jsondata => {
				this.setState({jsondata});
				console.log(this.state.jsondata);
			})
			.catch((error) => {
				console.error(error);
			})
	 }
   
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

                            <img id="avatar" name = "image" className="img-responsive" src={require('../images/profile.jpg')} alt="profile img" />

                            </div>
                        </div>
                        <hr>
                        </hr>
                       
                            <form align="center" onSubmit={this.handleSubmit}>
                            <div className="row">
                                <div className="col-xs-6 col-sm-6 col-md-6">
                                    <div className="form-group" id="text-al">
                                        <label>Name:</label>
                                    </div>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6">
                                    <div className="form-group" id="text-al">
                                    {this.state.jsondata.map(datas => 
                                    <input type="text" name="user" id="user_name" 
                                    className="form-control" placeholder="Dummy Name" 
                                     value={datas.user_name} />)}
                                    </div>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6">
                                    <div className="form-group" id="text-al">
                                        <label>Birth Date:</label>
                                    </div>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6">
                                    <div className="form-group" id="text-al">
                                    {this.state.jsondata.map(datas => 
                                    <input type="text" name="BirthDate" id="Birthdate" 
                                    className="form-control" placeholder="Dummy Date"
                                     disabled={this.state.disable} value={datas.user_birthdate} />)}
                                    </div>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6">
                                    <div className="form-group" id="text-al">
                                        <label>Location:</label>
                                    </div>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6">
                                    <div className="form-group" id="text-al">
                                    {this.state.jsondata.map(datas => 
                                    <input type="text" name="Location" id="Location"
                                     className="form-control" placeholder="Dummy Location" 
                                      disabled={this.state.disable} value={datas.user_address} />)}
                                    </div>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6">
                                    <div className="form-group" id="text-al">
                                        <label>Interests:</label>
                                    </div>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6">
                                    <div className="form-group" id="text-al">
                                     {this.state.jsondata.map(datas => 
                                    <input type="text" name="interests" id="interests" 
                                    className="form-control" placeholder="Dummy Data" 
                                     disabled={this.state.disable} value={datas.user_interests} />)}
                                    </div>
                                </div>
                                 <div className="col-xs-6 col-sm-6 col-md-6">
                                    <div className="form-group" id="text-al">
                                        <label>Email:</label>
                                    </div>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6">
                                    <div className="form-group" id="text-al">
                                     {this.state.jsondata.map(datas => 
                                    <input type="text" name="email" id="email" 
                                    className="form-control" placeholder="Dummy Data"
                                     disabled={this.state.disable} value={datas.user_email} />)}
                                    </div>
                                </div>
                                 <div className="col-xs-6 col-sm-6 col-md-6">
                                    <div className="form-group" id="text-al">
                                        <label>Contact:</label>
                                    </div>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6">
                                    <div className="form-group" id="text-al">
                                     {this.state.jsondata.map(datas => 
                                    <input type="text" name="number" id="number" 
                                    className="form-control" placeholder="Dummy Data"
                                     disabled={this.state.disable} value={datas.user_number} />)}
                                    </div>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6">
                                    <div className="form-group" id="text-al">
                                        <label>Password:</label>
                                    </div>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6">
                                    <div className="form-group" id="text-al">
                                     {this.state.jsondata.map(datas => 
                                    <input type="text" name="password" id="password" 
                                    className="form-control" placeholder="Dummy Data"
                                     disabled={this.state.disable} value={datas.user_password} />)}
                                    </div>
                                </div>
                                <div className="col-xs-3 col-sm-3 col-md-3">
                                    <div className="form-group"id="text-al">
                                    </div>
                                </div>
                                <div className="col-xs-3 col-sm-3 col-md-3">
                                    <div className="form-group" id="text-al">
                                    <button type="button" onClick={this.handleClick.bind(this)} 
                                    class="btn btn-block btn-lg btn_primary">Edit</button>


                                    </div>
                                </div>
                                <div className="col-xs-3 col-sm-3 col-md-3">
                                    <div className="form-group" id="text-al">
                                    <input type="button" class="btn btn-block btn-lg btn_primary" value="Submit"/>
                                    
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
