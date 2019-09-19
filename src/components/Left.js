import React from 'react';
import './Components.css';


export default class Left extends React.Component{
  render() {
    return (
      <div className="aside Left">
        <a
          className="App-link"
          href="mailto:agnesfcameron@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click the page to get in touch!
        </a>
      </div>
    );
  }
}
