import React from 'react';
import './Thoughts.css';
import Top from '../components/Top.js';
import { Link } from 'react-router-dom';

export default class Thoughts extends React.Component{

  render() {
    return (
      <div className="App Bg-white">
        <div className="projectsContainer">
        <Top />
          <div className="mobileHeader">FOREIGN OBJECTS</div>
          <div className="mobileNavContainer">
            <div className="mobileNavLeft"><span><Link to='/' className="Orange Arrow">&#8598;</Link>HOME</span></div>
            <div className="mobileNavCenter">ABOUT<span><Link to='/About' className="Orange Arrow">&#8600;</Link></span></div>
            <div className="mobileNavRight">WORK<span><Link to='/Projects' className="Orange Arrow">&#8594;</Link></span></div>
          </div>  
          <Link to='/' className="App-link backArrowFixed" />     
            <div>~thoughts under construction~</div>
        </div>
      </div>
    );
  }
}
