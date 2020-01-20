import React from 'react';
import './Projects.css';
import IAACjpg from '../assets/IAAC.png';
import STCjpg from '../assets/STC.jpg';
import STC2jpg from '../assets/STC2.jpg';
import ProjectModule from '../components/ProjectModule';
import Circle from '../components/Circle.js';

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
          <div className="Projects"> 
              <div className="mobileHeader">FOREIGN OBJECTS</div>
              <div className="mobileNavContainer">
                <div className="mobileNavItem1">
                <a className="Orange Arrow"
                href="https://www.foreignobjects.net"
                rel="noopener noreferrer">&#8598;</a>HOME</div>
                <div className="mobileNavItem2">CONVERSATION<span className="Orange Arrow">&#8600;</span></div>
                <div className="mobileNavItem3">ABOUT<span className="Orange Arrow">&#8594;</span></div>
              </div>  
            <div className="backgroundLogo" draggable="false">
              <div>FOREIGN OBJECTS</div>
            </div>
            <div className="Verso">
              <ProjectModule>
                <div className="projectOne">
                  <Circle>The Internet as a City</Circle>
                  <img draggable="false" src={IAACjpg} />
                </div>
              </ProjectModule>
            </div>
            <div className="Recto">
              <ProjectModule> 
                <div className="projectTwo">
                  <div className="lineTitle">Seeing the City</div>
                  <img draggable="false" src={STCjpg} />
                </div>
              </ProjectModule>
               <ProjectModule> 
                <div className="projectThree">
                  <Circle>Another Project We Did</Circle>
                  <img draggable="false" src={STC2jpg} />
                </div>
              </ProjectModule>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
