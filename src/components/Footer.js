import React from 'react';
import './Components.css';

export default class Footer extends React.Component{
  render() {
    return (
          <div className="footerContainer">       
          <div className="footerLeft">        
          <a className="App-link"
            href="https://g.page/newinc?share"
            rel="noopener noreferrer">
            <span className="arrowNW"/>FOREIGN OBJECTS LLC<br/>231 Bowery FL2<br/>NYC, NY 10002<span className="arrowSE" /></a></div>
          <div className="footerRight"> 
            <a className="App-link"
            href="mailto:hello@foreignobjects.net?subject='hello objects!'"
            rel="noopener noreferrer">
              <span className="arrowNW"/>hello@foreignobjects.net<span className="arrowSE"/></a>
              <br/>
              <a className="App-link"
            href="http://www.foreignobjects.net">
            <span className="arrowNW"/>www.foreignobjects.net<span className="arrowSE"/></a>
            <br/>
            <a className="App-link"
            href="http://www.twitter.com/foreignobj"
            rel="noopener noreferrer">
            <span className="arrowNW"/>@foreignobj<span className="arrowSE"/>
            </a></div>
          </div>
    );
  }
}
