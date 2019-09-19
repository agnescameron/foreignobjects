import React from 'react';
import './Components.css';


export default class Right extends React.Component{
  render() {
    const className= this.props.hovering ? 'aside Right' : 'aside hidden Right'
    return (
      <div className={className}>
        We are a research studio and consultancy based in NYC.
      </div>
    );
  }
}
