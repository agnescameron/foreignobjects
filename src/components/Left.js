import React from 'react';
import './Components.css';


export default class Left extends React.Component{

  render() {
    const className= this.props.hovering ? 'aside Left' : 'aside hidden Left'
    return (
      <div className={className}>
        <a
          className="App-link"
          href="mailto:hello@foreignobjects.net"
          rel="noopener noreferrer"
        >
          Click to get in touch!
        </a>
      </div>
    );
  }
}
