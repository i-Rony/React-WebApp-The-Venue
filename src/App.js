import React, {Component} from 'react';
import {Element} from 'react-scroll';
import Header from './components/Header';
import './resources/styles.css';
import Featured from './components/Featured';
import VenueInfo from './components/VenueInfo';
import Highlights from './components/Highlights';
import Pricing from './components/Pricing';
import Location from './components/Location';
import Footer from './components/Footer';

class App extends Component {
  render(){
    return(
      <div className="App" style = {{height: "1500px", background: 'black'}}>
        <Header />

        <Element name="event">
          <Featured />
        </Element>

        <Element name="venue info">
          <VenueInfo />
        </Element>

        <Element name="highlights">
          <Highlights />
        </Element>
        
        <Element name="pricing">
          <Pricing />
        </Element>
        
        <Element name="location">
          <Location />
        </Element>

        <Footer />
      </div>
    );
  }
}

export default App;