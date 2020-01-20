import React from 'react';
import ProjectModule from '../components/ProjectModule'
import './Projects.css';
import Circle from '../components/Circle.js';
import Top from '../components/Top.js';

const AIRTABLE_API_KEY = ""
const MAX_RECORDS = 20;

export default class Projects extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        projects: [],
        };
    }
    
    componentDidMount() {
        fetch(".netlify/functions/lambda")
        .then(function(response) {
          console.log(response)
          return response.json();
        }).then( (data) => {
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
    return (
      <div className="App">
            {projects.map((project, i) => {
                // Return the element. Also pass key
               return (<ProjectModule key={i} project={project} />)
        })}
        <div className="projectsContainer">
          <Top hovering="true" />
          <div className="Projects">
              <div className="mobileHeader">FOREIGN OBJECTS</div>
              <div className="mobileNavContainer">
                <div className="mobileTitleLeft">
                <a className="Orange Arrow"
                href="https://www.foreignobjects.net"
                rel="noopener noreferrer">&#8598;</a>HOME</div>
                <div className="mobileTitleCenter">CONVERSATION<span className="Orange Arrow">&#8600;</span></div>
                <div className="mobileTitleRight">ABOUT<span className="Orange Arrow">&#8594;</span></div>
              </div>  
            <div className="backgroundLogo" draggable="false">
              <div>FOREIGN OBJECTS</div>
            </div>
            <div className="Verso">
              <div className="backArrow" />
              <div className="projectBox">
                <div className="projectLarge">
                  <div className="lineTitle">The Internet as a City</div>
                  <div className="mobileTitleLeft">THE INTERNET AS A CITY</div>                  
                </div>
              </div>
            </div>
            <div className="Recto">
              <div className="projectBox"> 
                <div className="projectMedium">
                  <div className="lineTitle">Seeing the City</div>
                  <div className="mobileTitleLeft">SEEING THE CITY</div>
                </div>
              </div>
               <div className="projectBox"> 
                <div className="projectSmall">
                  <div className="lineTitle">Another Project We Did</div>
                  <div className="mobileTitleLeft">ANOTHER PROJECTS WE DID</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
