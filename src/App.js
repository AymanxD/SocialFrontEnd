import React, { Component } from 'react';
import './css/App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './js/Home';
import About from './js/about';
import Footer from './js/footer';
import EventsList from './js/eventsList';
import Register from './js/Register';
import Login from './js/Login';



class App extends Component {

    // React-Router to move to other pages in the web page.
  render() {
    return (
        <Router>
            <div>
              <div className="App container">
                  <Route exact path="/" component={Home}/>
                  <Route path="/about" component={About}/>
                  <Route path="/events" component={EventsList}/>
                  <Route path="/Register" component={Register}/>
                  <Route path="/Login" component={Login}/>
              </div>
              <Footer/>
            </div>
        </Router>
    );
  }
}

export default App;
