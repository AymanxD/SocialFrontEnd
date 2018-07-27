import React, {Component} from 'react';
import '../css/Event_Details.css';
import Navigation from './Navigation'
import image1 from '../images/image1.jpg';
import {Link} from 'react-router-dom';




export default class Event_Details extends Component {
	constructor(props) {
        super(props);
        this.state = {
            jsondata:[]
        };
    }

	 componentDidMount(){
		fetch('http://localhost:3001/events/view')
			.then(response => response.json())
			.then(jsondata => {
				this.setState({jsondata});
				console.log(this.state.jsondata);
			})
			.catch((error) => {
				console.error(error);
			})
	 }

	

	render() {
		return (
		<div>
		  <Navigation/>	
		  	<div className="container">
		  			<div className="container-event">
		  				<div id="wrapper" className="row">
		  					<div className="col-xs-12 col-sm-6">
		  						<img src={image1} alt="Event Picture" className="img-responsive"/>
		  						<div className="row socialbtn">
                                    <div className="col-sm-5">
                                    <input type="button" class="register btn btn-default childs" value="Send Message" onclick="location.href='#'"/>
                                    </div>
                                    <div className="col-sm-5">
                                    <div className="form-group">
                                            <input type="button" class="register btn btn-default childs" value=" Share Event " onclick="location.href='#'"/>
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
			  					<div class="action">
									<Link to="/Map"><button class="register btn btn-sm">Directions</button></Link>
								</div>
								<br/><br/>
			  					<h4 className="price">Ticket Price: <span>Free</span></h4><br/>
			  					<div className="action">
									<button className="register btn btn-default" type="button">Register For Event</button>
								</div>
						</div>
						         
		  			</div>
		  		</div>
		  	</div>
		</div>	
		);
	}
}
