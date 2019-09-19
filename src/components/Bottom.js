import React from 'react';
import './Components.css';


export default class Buttom extends React.Component{
  render() {
    const className= this.props.hovering ? 'Bottom' : 'hidden Bottom'
    return (
      <div className={className}>
        We create websites, installations, field reports, simulations, and other critical tools.
      </div>
    );
  }
}
