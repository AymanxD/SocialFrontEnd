import React, {Component} from 'react';
import '../css/Event_Details.css';
import Navigation from './Navigation'
import {Link} from 'react-router-dom';
import Geocode from "react-geocode";
import messages from './messages';
import {TwitterShareButton, TwitterIcon} from 'react-share';

export default class Event_Details extends Component {
	constructor(props) {
        super(props);
        this.state = {
			jsondata:[],
			lat: 0,
			lng: 0,
            shareURL: ""
        };

        this.getEventDetails = this.getEventDetails.bind(this);
	}
	
	 componentDidMount(){

		//console.log( this.props.location.state)
		const { eventID } = this.props.location.state;
		//console.log(eventID);
		fetch(`http://localhost:3001/events/view/${eventID}`)
			.then(response => response.json())
			.then(jsondata => {
				this.setState({jsondata});
				let address =jsondata[0]['event_address']
				console.log(address)

				Geocode.setApiKey("AIzaSyCw19ysNBwzIt8HY9RN5vshd5NNRRBrpU8");
				Geocode.fromAddress(address).then(
					response => {
					const { lat, lng } = response.results[0].geometry.location;
					console.log(lat, lng);
					this.setState({lat: lat, lng: lng});
					},
					error => {
					console.error(error);
		}
	  );
			})
			.catch((error) => {
				console.error(error);
			})
         let url = window.location.href;
         let id = url.substring(url.lastIndexOf('/') + 1);
         this.getEventDetails(id);

         this.setState({shareURL: url});
	 }

    getEventDetails = (eventID) => {
        fetch(`http://localhost:3001/events/view/${eventID}`)
            .then(response => response.json())
            .then(jsondata => {
                this.setState({jsondata});
                //
            })
            .catch((error) => {
                console.error(error);
            })
    };


	 handleSubmit = (event) => {
		event.preventDefault();
		//console.log(this.state.jsondata[0].idEvent);
		fetch('https://socialbackendweb.herokuapp.com/events/register', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                UserID: "72",
				EventID: this.state.jsondata[0].idEvent,
            }),
		}) 
            .then(response => response.json())
            .then(jsondata => alert(jsondata.message))
            .catch((error) => {
                console.error(error);
            });
	};

    render() {
		return (
		<div>
		  <Navigation/>	
		  	<div className="container">
			  <form onSubmit={this.handleSubmit}>
		  			<div className="container-event">
		  				<div id="wrapper" className="row">
		  					<div className="col-xs-12 col-sm-6">
							  {this.state.jsondata.map(datas =>
								  <img className="img-responsive" key={datas.idEvent} src={datas.event_image} alt="Event Picture" ></img>	)}
		  						<div className="row socialbtn">
                                    <div className="col-sm-5">
									<Link to={{ pathname:`/messages/`}}>
                            
                                    <input type="button" class="register btn btn-default childs" value="Send Message"/>
									</Link>
                                    </div>
                                    <div className="col-sm-5">
                                    <div className="form-group">
										<TwitterShareButton url={this.state.shareURL}><TwitterIcon round={true}/></TwitterShareButton>
                                     </div>
                                </div>
                        </div>   
		  					</div>
		  					<div className="col-sm-6 col-xs-12 justify-content">
		  						{this.state.jsondata.map(datas =>
								  <h3 className="Mrgin" key={datas.idEvent}>{datas.event_name}</h3>	)}
								{this.state.jsondata.map(datas =>  
			  					<h4 key={datas.idEvent}>{datas.event_date}</h4>	)}
								{this.state.jsondata.map(datas => 
			  					<h4 key={datas.idEvent}>Time : {datas.start_time} - {datas.end_time}</h4>)}
								{this.state.jsondata.map(datas =>   
			  					<h4 key={datas.idEvent}>Venue : {datas.event_address}</h4>)}
			  					<div className="action">
									<Link to={{pathname:"/Map", state:{lat:this.state.lat, lng: this.state.lng}}}><button className="register btn btn-sm">View On Maps</button></Link>
								</div>
								<br/><br/>
			  					<h4 className="price">Ticket Price: <span>Free</span></h4><br/>
			  					<div className="action">
									<button className="register btn btn-default" type="submit">Register For Event</button>
								</div>
						</div>

						         
		  			</div>
		  		</div>
			 </form>
		  	</div>
		</div>	
		);
	}
}
