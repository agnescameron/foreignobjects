import React from 'react';
import './Components.css';


export default class Right extends React.Component{
  render() {
    const className= this.props.hovering ? 'aside Right' : 'aside hidden Right'
    return (
      <div className={className}>
        We are a <a
            className="App-link"
            href="https://www.are.na/foreign-objects"
            target="_blank"
            rel="noopener noreferrer"
          >research studio</a> and <a
            className="App-link"
            href="https://www.newinc.org/year-6-members/agnes-cameron-gary-zhexi-zhang-kalli-retzepi-sam-ghantous"
            target="_blank"
            rel="noopener noreferrer"
          >cultural consultancy</a>  based in NYC.
      </div>
    );
  }
}


