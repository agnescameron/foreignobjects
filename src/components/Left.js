import React from 'react';
import './Components.css';


export default class Left extends React.Component{

  render() {
    const className= this.props.hovering ? 'aside Left' : 'aside hidden Left'
    return (
      <div className={className}>
        <a
          className="App-link"
          href="mailto:hello@foreignobjects.net?subject='hello objects!'"
          rel="noopener noreferrer"
        >
          get in touch!
        </a>
      </div>
    );
  }
}
