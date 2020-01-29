import React from 'react';
// import DragBox from '../components/DragBox';
// import ProjectModule from '../components/ProjectModule';
// import Circle from '../components/Circle.js';

import Left from '../components/Left';
import Top from '../components/Top';
import Right from '../components/Right';
import Bottom from '../components/Bottom';
import Center from '../components/Center';
import DragBox from '../components/DragBox';
import Circle from '../components/Circle.js';
import Widget from '../components/Widget.js';
import HomeProjectModule from '../components/HomeProjectModule';
import ProjectModule from '../components/ProjectModule';
import ProjectContext from '../ProjectContext';
import { Link } from 'react-router-dom';

import WorkButton from '../assets/WorkButton.png';
import Thoughts from '../assets/thoughts.gif';
import Bubbles from '../assets/bubbles.gif';
import Bearcam from '../assets/bearcam.gif';

import publicIP from 'react-native-public-ip';

import './Home.css';

export default class Home extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      hovering : false,
          ip: '',
    }
  }

  static contextType = ProjectContext;

componentDidMount(){

  publicIP()
    .then(ip => {
      console.log("ip");
      // '47.122.71.234'
      this.setState({ ip : ip })
    })
    .catch(error => {
      console.log(error);
      // 'Unable to get IP address.'
    });
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

      const ip = this.state.ip;
      console.log("ip is", this.state.ip)
     
      const HomeProject = this.context.filter(function(project){
        if(project.fields["Show on Home Screen"] === true){
          return project}
        })

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
        {/* <Top hovering={this.state.hovering} onClick={this.handleLeave}/>*/}
        <div className="Hello">Hello.</div>
        {/* <Right hovering={this.state.hovering} onClick={this.handleLeave}/>
        <Bottom hovering={this.state.hovering} onClick={this.handleLeave}/>
        <Left hovering={this.state.hovering} onClick={this.handleLeave}/> */}
        
        <div className="footerContainer">       
          <div className="footerLeft"><span className="arrowNW"/>FOREIGN OBJECTS LLC<br/>231 Bowery FL2<br/>NYC, NY 10002<span className="arrowSE" /></div>
          <div className="footerRight"> 
            <a className="App-link"
            href="mailto:hello@foreignobjects.net?subject='hello objects!'"
            rel="noopener noreferrer">
              <span className="arrowNW"/>hello@foreignobjects.net<span className="arrowSE"/>
            </a><br/><span className="arrowNW"/>www.foreignobjects.net<span className="arrowSE"/><br/><span className="arrowNW"/>@foreignobj<span className="arrowSE"/></div>
        </div>

        <Widget type="projects" place="Widget widgetPositionOne">{WorkButton}</Widget>
        <Widget place="Widget widgetPositionTwo">{Bearcam}</Widget>
        <Widget place="Widget widgetPositionFour">{Thoughts}</Widget>
        <Widget place="Widget widgetPositionThree">{Bubbles}</Widget>
        <div className="Widget widgetPositionThree">{this.state.ip}</div>

          <ProjectContext.Consumer>
            {value => { 
              {HomeProject &&
              console.log(HomeProject);
              return (
                  HomeProject.map((project, i) => {
                  // Return the element. Also pass key
                    return (<HomeProjectModule key={i} index={i} project={HomeProject} />)
                  })
                )
            }
            }
          }
          </ProjectContext.Consumer>
         
          <DragBox>
            <div className="ProjectModule testModule">
              <Circle>
                wooooooo &#8598; whattttttt $$$$$$$$$$$$$$$$$ NASDAQ 2.4252 523.500 &#8600; 25.0001
              </Circle>
            </div> 
          </DragBox>

      </div>
    );
  }
}
