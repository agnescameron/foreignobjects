import React from 'react';
import './Components.css';

export default class Top extends React.Component{
  render() {
    const className= this.props.hovering ? 'Top' : 'hidden Top'
    return (
      <div className={className}>
        FOREIGN OBJECTS consists of&nbsp;
<a
            className="App-link"
            href="https://kalli-retzepi.com/"
            target="_blank"
            rel="noopener noreferrer"
          >kalli retzepi</a>,&nbsp;
          <a
            className="App-link"
            href="http://samtous.wtf"
            target="_blank"
            rel="noopener noreferrer"
          >sam ghantous</a>,&nbsp;
          <a
            className="App-link"
            href="http://zhexi.info"
            target="_blank"
            rel="noopener noreferrer"
          >gary zhexi zhang</a>, and&nbsp;
          <a
            className="App-link"
            href="http://agnescameron.info"
            target="_blank"
            rel="noopener noreferrer"
          >agnes cameron</a>.
      </div>
    );
  }
}
