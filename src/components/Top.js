import React from 'react';
import './Components.css';


export default class Top extends React.Component{
  render() {
    const className= this.props.hovering ? 'Top' : 'hidden Top'
    return (
      <div className={className}>
        FOREIGN OBJECTS consists of kalli retzepi, sam ghantous, gary zhexi zhang and agnes cameron
      </div>
    );
  }
}
