import React from 'react';
import './Components.css';
import IP from './IP'
export default class Top extends React.Component{
  render() {
    const className= this.props.hovering ? 'Top' : 'hidden Top'
    return (
      <div className="Top">       
        <IP />
      </div>
    );
  }
}
