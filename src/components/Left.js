import React from 'react';
import './Components.css';

export default class Left extends React.Component{

  render() {
    return (
      <div className="Left">
        <a
          className="App-link"
          href="mailto:hello@foreignobjects.net?subject='hello objects!'"
          rel="noopener noreferrer"
        >
          Get in touch!
        </a>
      </div>
    );
  }
}
