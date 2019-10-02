import React from 'react';
import './About.css';

export default class About extends React.Component{
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="About">
        You found our secret page. We want to work with you!
      </div>
    );
  }
}
