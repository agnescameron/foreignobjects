import React from 'react';
import './Components.css';


export default class Buttom extends React.Component{
  render() {
    const className= this.props.hovering ? 'Bottom' : 'hidden Bottom'
    return (
      <div className={className}>
        We create websites, installations, field reports, simulations, and other critical tools.
        <div className='font'>
          Website typeset in 'Migrant', by the awesome team at <a
            className="App-link"
            href="http://www.offshorestudio.ch/"
            target="_blank"
            rel="noopener noreferrer"
          >
            OFFSHORE STUDIO
          </a>
        </div>
      </div>
    );
  }
}
