import React from 'react';
import DragBox from '../components/DragBox';
import HomeProjectModule from '../components/HomeProjectModule';

import Left from '../components/Left';
import Top from '../components/Top';
import Right from '../components/Right';
import Bottom from '../components/Bottom';
import Center from '../components/Center';
import Circle from '../components/Circle.js';

import { Link } from 'react-router-dom';

import './Home.css';


const AIRTABLE_API_KEY = ""
const MAX_RECORDS = 20;

export default class AltHome extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      hovering : false,
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

  componentDidMount() {
    fetch(".netlify/functions/lambda")
    .then(function(response) {
      console.log(response)
      return response.json();
    }).then( (data) => {
      console.log(data)
      //omits projects tagged as private
      var publicProjects = data.records.filter(function(project){ 
        if(project.fields["Release Status"]){
          return project.fields["Release Status"].includes("Personal–Private") === false; }
        })
      console.log(publicProjects);
      this.setState({projects: publicProjects});
    }).catch(err => {console.log(err)});
}

  render() {
    var projects = this.state.projects;
    console.log(projects + "!!!");
    return (
      <div className="App">
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

        <DragBox>
          <div> 
            {projects.map((project, i) => {
                      // Return the element. Also pass key
                     return (<HomeProjectModule key={i} index={i} project={project} />)
                  })}
           </div>
        </DragBox>

        <DragBox>
          <div className="ProjectModule testModule">
            <Circle>
              wooooooo &#8598; whattttttt $$$$$$$$$$$$$$$$$ NASDAQ 2.4252 523.500 &#8600; 25.0001
            </Circle>
          </div> 
        </DragBox>

        <Left hovering={this.state.hovering} onClick={this.handleLeave}/>
      </div>
    );
  }
}
