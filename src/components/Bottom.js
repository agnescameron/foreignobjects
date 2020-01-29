import React from 'react';
import './Components.css'; 

export default class Bottom extends React.Component{
  render() {
    const className= this.props.hovering ? 'Bottom' : 'hidden Bottom'
    return (
      <div className="Bottom">
        We make&nbsp;<a
            className="App-link"
            href="/props-paper"
            rel="noopener noreferrer"
          >websites</a>,&nbsp; <a
            className="App-link"
            href="/internet-as-an-object"
            rel="noopener noreferrer"
          >installations</a>,&nbsp; <a
            className="App-link"
            href="/internet-as-a-city"
            rel="noopener noreferrer"
          >workshops</a>,&nbsp; <a
            className="App-link"
            href="permaculture-network"
            rel="noopener noreferrer"
          >simulations</a>,&nbsp; and other&nbsp; <a
            className="App-link"
            href="/projects"
            rel="noopener noreferrer"
          >critical tools</a>&nbsp; in digital and physical space.
      </div>
    );
  }
}
