import React from 'react';
// import DragBox from '../components/DragBox';
// import ProjectModule from '../components/ProjectModule';
// import Circle from '../components/Circle.js';

import Left from '../components/Left';
import Top from '../components/Top';
import Right from '../components/Right';
import Bottom from '../components/Bottom';
import Center from '../components/Center';

import { Link } from 'react-router-dom';

import './Home.css';

export default class Home extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      hovering : false
    }
  }

  handleEnter = (event) => {
    event.preventDefault()
    this.setState(prevState => ({hovering: true}))
  }
  handleLeave = (event) => {
    event.preventDefault()
    this.setState(prevState => ({hovering: !prevState.hovering}))
  }
  handleClick= (event) => {
    event.preventDefault()
    window.location = "mailto:hello@foreignobjects.net";
  }

  render() {
    return (
      <div className="App Bg-blue">
        <div className="mobileHeader">FOREIGN OBJECTS</div>
        <div className="mobileNavContainer">
          <div className="mobileNavLeft"><span><Link to='/' className="Orange Arrow">&#8598;</Link>HOME</span></div>
          <div className="mobileNavCenter">ABOUT<span><Link to='/About' className="Orange Arrow">&#8600;</Link></span></div>
          <div className="mobileNavRight">WORK<span><Link to='/Projects' className="Orange Arrow">&#8594;</Link></span></div>
        </div>
        <div className="Center"
        //for mobile
        onMouseEnter={this.handleEnter}
        //for desktop
        onMouseLeave={this.handleLeave}
        >          
        <Center />
        </div>
        <Top hovering={this.state.hovering} onClick={this.handleLeave}/>
        <div className="Hello">Hello.</div>
        <Right hovering={this.state.hovering} onClick={this.handleLeave}/>
        <Bottom hovering={this.state.hovering} onClick={this.handleLeave}/>
        <Left hovering={this.state.hovering} onClick={this.handleLeave}/>

      </div>
    );
  }
}
