import React from 'react';
import './Components.css';


export default class Bottom extends React.Component{
  render() {
    const className= this.props.hovering ? 'Bottom' : 'hidden Bottom'
    return (
      <div className={className}>
        We make <a
            className="App-link"
            href="http://propspaper.com"
            target="_blank"
            rel="noopener noreferrer"
          >websites</a>, <a
            className="App-link"
            href="http://yveyang.com/exhibitions/arch-mixes"
            target="_blank"
            rel="noopener noreferrer"
          >installations</a>, <a
            className="App-link"
            href="https://internetas.city"
            target="_blank"
            rel="noopener noreferrer"
          >workshops</a>, <a
            className="App-link"
            href="http://root.schloss-post.com"
            target="_blank"
            rel="noopener noreferrer"
          >simulations</a>, and other <a
          className="App-link"
          href="https://kalli-retzepi.com/clickhere/"
          target="_blank"
            rel="noopener noreferrer"
          >critical tools</a> in digital and physical space.
        <div className='font'>
          Website typeset in 'Migrant', by the awesome team at&nbsp;<a
            className="App-link"
            href="http://www.offshorestudio.ch/"
            target="_blank"
            rel="noopener noreferrer"
          >OFFSHORE STUDIO
          </a>.
        </div>
      </div>
    );
  }
}
