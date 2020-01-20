import React from 'react';
import './Projects.css';

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
      
        <div className="Projects"> 
          <div className="projectsContainer">
              <div className="mobileHeader">FOREIGN OBJECTS</div>
              <div className="mobileNavContainer">
                <div className="mobileNavItem1">
                <a className="Orange Arrow"
                href="https://www.foreignobjects.net"
                rel="noopener noreferrer">&#8598;</a>HOME</div>
                <div className="mobileNavItem2">CONVERSATION<span className="Orange Arrow">&#8600;</span></div>
                <div className="mobileNavItem3">ABOUT<span className="Orange Arrow">&#8594;</span></div>
              </div>  
            <div className="backgroundLogo">
              <div>FOREIGN OBJECTS</div>
            </div>
            <div className="Verso">
            </div>
            <div className="Recto">
            </div>
          </div>
        </div>
      </div>
    );
  }
}
