import React, { Component } from 'react';
import './css/App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './js/Home';
import Categories from './js/categories';
import About from './js/about';
import Footer from './js/footer';
import EventsList from './js/eventsList';
import Register from './js/Register';
import Login from './js/Login';
import Profile from './js/Profile';
import CreateEvent from './js/CreateEvent';
import Event_Details from './js/Event_Details';
import Mapview from './js/Map_View';
import Category from './js/category';
import SearchResults from './js/searchResults'
import FullSearch from './js/fullSearch'
import UpdateEventForm from './js/UpdateEventForm';



class App extends Component {

    // React-Router to move to other pages in the web page.
  render() {
    return (
        <Router>
            <div>
              <div className="App container">
                  <Route exact path="/" component={Home}/>
                  <Route path="/about" component={About}/>
                  <Route path="/profile" component={Profile}/>
                  <Route path="/events" component={EventsList}/>
                  <Route path="/CreateEvent" component={CreateEvent}/>
                  <Route path="/Event_Details" component={Event_Details}/>
                  <Route  path="/Map" component={Mapview}/>
                  <Route exact path="/Categories" component={Categories}/>
                  <Route path="/Register" component={Register}/>
                  <Route path="/Login" component={Login}/>
                  <Route path="/Category" component={Category}/>
                  <Route path="/SearchResults/:searchTerm" component={SearchResults}/>
                  <Route path="/FullSearch" component={FullSearch}/>
                  <Route path="/UpdateEventForm" component={UpdateEventForm}/>
              </div>
              <Footer/>
            </div>
        </Router>
    );
  }
}

export default App;
