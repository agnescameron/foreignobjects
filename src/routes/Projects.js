import React from 'react';
import ProjectModule from '../components/ProjectModule'
import ProjectPage from './ProjectPage';
import './Projects.css';
import Circle from '../components/Circle.js';
import Top from '../components/Top.js';
import ProjectContext from '../ProjectContext';

import { Link } from 'react-router-dom';

const AIRTABLE_API_KEY = ""
const MAX_RECORDS = 20;

export default class Projects extends React.Component{
    
  static contextType = ProjectContext

  render() {


    return (
      <div className="App Bg-white">
        <div className="projectsContainer">
          <div className="mobileHeader">FOREIGN OBJECTS</div>
          <div className="mobileNavContainer">
            <div className="mobileNavLeft"><span><Link to='/' className="Orange Arrow">&#8598;</Link>HOME</span></div>
            <div className="mobileNavCenter">ABOUT<span><Link to='/About' className="Orange Arrow">&#8600;</Link></span></div>
            <div className="mobileNavRight">WORK<span><Link to='/Projects' className="Orange Arrow">&#8594;</Link></span></div>
          </div>  
          <Top hovering="true" />
          <Link to='/' className="App-link backArrow" />
            
            <ProjectContext.Consumer>
              {value => { 

                const projects = this.context
                return (
                  projects.map((project, i) => {
                  // Return the element. Also pass key
                    return (<ProjectModule key={i} index={i} project={project} />)
                  })
                  )
              }}
              

            </ProjectContext.Consumer>

        </div>
      </div>

    );
  }
}
