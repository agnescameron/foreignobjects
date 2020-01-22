import React from 'react';
import './Components.css'; 

export default class Bottom extends React.Component{
  render() {
    const className= this.props.hovering ? 'Bottom' : 'hidden Bottom'
    return (
      <div className={className}>
        We make&nbsp;<a
            className="App-link"
            href="http://propspaper.com"
            target="_blank"
            rel="noopener noreferrer"
          >websites</a>,&nbsp; <a
            className="App-link"
            href="http://yveyang.com/exhibitions/arch-mixes"
            target="_blank"
            rel="noopener noreferrer"
          >installations</a>,&nbsp; <a
            className="App-link"
            href="https://internetas.city"
            target="_blank"
            rel="noopener noreferrer"
          >workshops</a>,&nbsp; <a
            className="App-link"
            href="http://root.schloss-post.com"
            target="_blank"
            rel="noopener noreferrer"
          >simulations</a>,&nbsp; and other&nbsp; <a
          className="App-link"
          href="https://kalli-retzepi.com/clickhere/"
          target="_blank"
            rel="noopener noreferrer"
          >critical tools</a>&nbsp; in digital and physical space.
      </div>
    );
  }
}
