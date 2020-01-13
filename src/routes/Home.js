import React from 'react';

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

        <Top hovering={this.state.hovering} onClick={this.handleLeave}/>
        <Left hovering={this.state.hovering} onClick={this.handleLeave}/>
        <Right hovering={this.state.hovering} onClick={this.handleLeave}/>
        <div className="bottomContainer">
          <Bottom hovering={this.state.hovering} onClick={this.handleLeave}/>
        </div>
      </div>
    );
  }
}
