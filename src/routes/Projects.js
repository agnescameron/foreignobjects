import React from 'react';
import './Projects.css';
import IAACjpg from '../assets/IAAC.png';
import STCjpg from '../assets/STC.jpg';
import STC2jpg from '../assets/STC2.jpg';
import ProjectModule from '../components/ProjectModule';
import Circle from '../components/Circle.js';
import Top from '../components/Top.js';

const AIRTABLE_API_KEY = ""
const MAX_RECORDS = 20;

export default class Projects extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        projects: [],
        }
    }
    
    componentDidMount() {
        fetch(".netlify/functions/lambda")
        .then(function(response) {
          console.log(response)
          return response.json();
        }).then(function(data) {
          console.log(data);
        }).catch(err => {console.log(err)});
    }
    
  render() {
    return (
      <div className="App">
        <div className="projectsContainer">
          <Top hovering="true" />
          <div className="Projects">
              <div className="mobileHeader">FOREIGN OBJECTS</div>
              <div className="mobileNavContainer">
                <div className="mobileNavLeft">
                <a className="Orange Arrow"
                href="https://www.foreignobjects.net"
                rel="noopener noreferrer">&#8598;</a>HOME</div>
                <div className="mobileNavCenter">CONVERSATION<span className="Orange Arrow">&#8600;</span></div>
                <div className="mobileNavRight">ABOUT<span className="Orange Arrow">&#8594;</span></div>
              </div>  
            <div className="backgroundLogo" draggable="false">
              <div>FOREIGN OBJECTS</div>
            </div>
            <div className="Verso">
              <div className="backArrow" />
              <ProjectModule>
                <div className="projectOne">
                  <div className="lineTitle">The Internet as a City</div>
                  <img draggable="false" src={IAACjpg} />
                  <div className="mobileNavRight">THE INTERNET AS A CITY</div>                  
                </div>
              </ProjectModule>
            </div>
            <div className="Recto">
              <ProjectModule> 
                <div className="projectTwo">
                  <div className="lineTitle">Seeing the City</div>
                  <img draggable="false" src={STCjpg} />
                  <div className="mobileNavLeft">SEEING THE CITY</div>
                </div>
              </ProjectModule>
               <ProjectModule> 
                <div className="projectThree">
                  <div className="lineTitle">Another Project We Did</div>
                  <img draggable="false" src={STC2jpg} />
                  <div className="mobileNavLeft">ANOTHER PROJECTS WE DID</div>
                </div>
              </ProjectModule>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
