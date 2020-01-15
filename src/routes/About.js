import React from 'react';

import './About.css';
import Circle from '../components/Circle.js';
import Top from '../components/Top';
import aboutImage from "../assets/aboutImage.png";

export default class About extends React.Component{
  constructor(props) {
    super(props);
}

  render() {
    return (
      <div className="App">
        <div className="aboutContainer">
          <Top hovering="true" />
          <div className="mobileHeader">FOREIGN OBJECTS</div>
          <div className="mobileNavContainer">
            <div className="mobileNavItem1">&#8598;WORKS</div>
            <div className="mobileNavItem2">CONVERSATION&#8600;</div>
            <div className="mobileNavItem3">ABOUT&#8594;</div>
          </div>          
          <div className="About">
            <div className="Verso">
              <div className="backArrow" />
              <div className="aboutBody">
                FOREIGN OBJECTS LLC is a design studio and consultancy working in physical and digital space. We create cultural artifacts and new imaginaries for life on the internet.
                <br/>
                <br/>
                Formed by four foreigners at MIT, we are a collective of interdisciplinary practitioners with expertise in architecture, web development, engineering and conceptual art. We work with artists, institutions and companies to research and build projects that explore boundaries of technology and society.                   Formed by four foreigners at MIT, we are a collective of interdisciplinary practitioners with expertise in architecture, web development, engineering and conceptual art. We work with artists, institutions and companies to research and build projects that explore boundaries of technology and society.      
                Formed by four foreigners at MIT, we are a collective of interdisciplinary practitioners with expertise in architecture, web development, engineering and conceptual art. We work with artists, institutions and companies to research and build projects that explore boundaries of technology and society.      
                Formed by four foreigners at MIT, we are a collective of interdisciplinary practitioners with expertise in architecture, web development, engineering and conceptual art. We work with artists, institutions and companies to research and build projects that explore boundaries of technology and society.      
                Formed by four foreigners at MIT, we are a collective of interdisciplinary practitioners with expertise in architecture, web development, engineering and conceptual art. We work with artists, institutions and companies to research and build projects that explore boundaries of technology and society.      
                Formed by four foreigners at MIT, we are a collective of interdisciplinary practitioners with expertise in architecture, web development, engineering and conceptual art. We work with artists, institutions and companies to research and build projects that explore boundaries of technology and society.      
                <br/>
                <br/>
                Clients we have worked with recently include <a className="App-link"
                      href="http://propspaper.com/"
                target="_blank"
                rel="noopener noreferrer">PROPS Paper</a>, <a className="App-link"
                href="http://www.tanyabonakdargallery.com/artists/agnieszka-kurant"
                target="_blank"
                rel="noopener noreferrer">Agnieszka Kurant</a>, <a className="App-link"
                href="http://www.sakiya.org"
                target="_blank"
                rel="noopener noreferrer">Sakiya</a>, N3Plus, <a className="App-link"
                href="https://london.sciencegallery.com/seasons/dark-matter"
                target="_blank"
                rel="noopener noreferrer">Science Gallery London</a>, <a className="App-link"
                href="https://www.armitagegonedance.org/"
                target="_blank"
                rel="noopener noreferrer">Karole Armitage</a>.
                <br/>
                <br/>
                We are based at <a
                className="App-link"
                href="https://www.newinc.org/year-6-members/agnes-cameron-gary-zhexi-zhang-kalli-retzepi-sam-ghantous"
                target="_blank"
                rel="noopener noreferrer"
                >NEW INC.</a>, at the New Museum in NYC. 
              </div>
            </div>
            <div className="Recto" />
            <img src={aboutImage} className="aboutImage" alt="About Us Image" />
          </div>
          <Circle>look wow it turns this took soooo long to make i hope you like it</Circle>
        </div>  
      </div>
    );
  }
}
