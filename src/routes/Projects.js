import React from 'react';
import ProjectModule from '../components/ProjectModule'
import './Projects.css';
import Top from '../components/Top.js';
import ProjectContext from '../ProjectContext';
import { Link } from 'react-router-dom';

export default class Projects extends React.Component{
    
  static contextType = ProjectContext

  render() {
    return (
      <div className="App Bg-white">
        <div className="projectsContainer">
          <div className="mobileHeader">FOREIGN OBJECTS</div>
          <div className="mobileNavContainer">
            <div className="mobileNavLeft"><span><Link to='/' className="App-link"> <span className="Orange Arrow">&#8598;</span>HOME</Link></span></div>
            <div className="mobileNavCenter"><span><Link to='/About' className="App-link">ABOUT<span className="Orange Arrow">&#8600;</span></Link></span></div>
            <div className="mobileNavRight"><span><Link to='/Projects' className="App-link">WORK<span className="Orange Arrow">&#8594;</span></Link></span></div>
          </div>  
          <Top hovering="true" />
          <Link to='/' className="App-link backArrowFixed" />     
           
            <ProjectContext.Consumer>
              {value => { 
                const projects = this.context
                return (
                  projects.map((project, i) => {
                    return (<ProjectModule key={i} index={i} project={project} />)
                  })
                  )
              }}
            </ProjectContext.Consumer>
      

      <div className="footerContainer">       
          <div className="footerLeft"><span className="arrowNW"/>FOREIGN OBJECTS LLC<br/>231 Bowery FL2<br/>NYC, NY 10002<span className="arrowSE" /></div>
          <div className="footerRight"> 
            <a className="App-link"
            href="mailto:hello@foreignobjects.net?subject='hello objects!'"
            rel="noopener noreferrer">
              <span className="arrowNW"/>hello@foreignobjects.net<span className="arrowSE"/>
            </a><br/><span className="arrowNW"/>www.foreignobjects.net<span className="arrowSE"/><br/><span className="arrowNW"/>@foreignobj<span className="arrowSE"/></div>
        </div>
                </div>

      </div>
    );
  }
}
