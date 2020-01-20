import React from 'react';
import Draggable from 'react-draggable';
import DragBox from '../components/DragBox';
import ProjectModule from '../components/ProjectModule';

import Left from '../components/Left';
import Top from '../components/Top';
import Right from '../components/Right';
import Bottom from '../components/Bottom';
import Center from '../components/Center';
import Circle from '../components/Circle.js';
import Image from '../assets/IAAC.png'


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
        <Right hovering={this.state.hovering} onClick={this.handleLeave}/>
        <div className="bottomContainer">
          <Bottom hovering={this.state.hovering} onClick={this.handleLeave}/>
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

        <Left hovering={this.state.hovering} onClick={this.handleLeave}/>
        
        {/* <DragBox> 
          <div className="projectModuleFilling">
            <img draggable="false" src={Image} />
            <div className="projectModuleText"> 
                The Internet as a City
            </div> 
          </div>
        </DragBox>
        <DragBox> 
          <Circle>
            wooooooo &#8598; whattttttt $$$$$$$$$$$$$$$$$ NASDAQ 2.4252 523.500 &#8600; 25.0001
          </Circle> 
        </DragBox> */} 

      </div>
    );
  }
}
