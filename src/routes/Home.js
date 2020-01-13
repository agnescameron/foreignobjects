import React from 'react';
import Draggable from 'react-draggable';
import ProjectModule from '../components/ProjectModule';

import Left from '../components/Left';
import Top from '../components/Top';
import Right from '../components/Right';
import Bottom from '../components/Bottom';
import Center from '../components/Center';

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
      <div className="App">
        <div className="Center"
        //for mobile
        onMouseEnter={this.handleEnter}
        //for desktop
        onMouseLeave={this.handleLeave}
        >          
          <Center />
        </div>

        <ProjectModule />
        
        <Top hovering={this.state.hovering}/>
        <Left hovering={this.state.hovering}/>
        <Right hovering={this.state.hovering}/>
        <div className="bottomContainer">
          <Bottom hovering={this.state.hovering}/>
        </div>

      </div>
    );
  }
}
