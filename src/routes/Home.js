import React from 'react';
// import DragBox from '../components/DragBox';
// import ProjectModule from '../components/ProjectModule';
// import Circle from '../components/Circle.js';

import Left from '../components/Left';
import Top from '../components/Top';
import Right from '../components/Right';
import Bottom from '../components/Bottom';
import Footer from '../components/Footer';
import Hogs from '../components/Hogs';
import Objects from '../components/Objects';


import Center from '../components/Center';
import DragBox from '../components/DragBox';
import Circle from '../components/Circle.js';
import Widget from '../components/Widget.js';
import HomeProjectModule from '../components/HomeProjectModule';
import ProjectContext from '../ProjectContext';
import { Link } from 'react-router-dom';

import WorkButton from '../assets/WorkButton.png';
import Thoughts from '../assets/thoughts.gif';
import Bubbles from '../assets/bubbles.gif';
import Bearcam from '../assets/bearcam.gif';

import './Home.css';

export default class Home extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      hogs : '',
    }
  }

  static contextType = ProjectContext;

componentDidMount() {
  fetch("https://www.quandl.com/api/v3/datasets/CHRIS/CME_LN1.json")
  .then (
  (quandl) => {
    return quandl.json();
  }).then (
  (quandl) => {
  // console.log ("hog data shows", quandl)
  this.setState ({ hogs : quandl })
  })
}

  render() {
      const HomeProject = this.context.filter(function(project){
        if(project.fields["Show on Home Screen"] === true){
          return project}
        })

      const DumbObjects = this.context.filter(function(project){
        if(project.fields["Project Name"] === "Dumb Objects"){
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
              <div className="Center">          
        <Center />
        </div>
        <Top />
        <div className="Hello">Hello.</div>
        <Right />
        <Bottom />
        <Left /> 
      
        <Widget type="projects" place="Widget widgetPositionOne">{WorkButton}</Widget>
        <Widget place="Widget widgetPositionTwo">{Bearcam}</Widget>
{/*}        <Widget type="thoughts" place="Widget widgetPositionFour">{Thoughts}</Widget> */}
        <Widget place="Widget widgetPositionThree">{Bubbles}</Widget>

          <ProjectContext.Consumer>
            {value => { 
              return (
                  HomeProject.map((project, i) => {
                    return (<HomeProjectModule key={i} index={i} project={HomeProject} />)
                  })
                ) 
            }
          }
          </ProjectContext.Consumer>
         
           <ProjectContext.Consumer>
            {value => {
              return (
                  DumbObjects.map((dumbImage) => {
                    let DumbImage = DumbObjects[0].fields.Image;
                    return (
                      DumbImage.map((dumbImage, i) => {
                            return (
                              <Objects key={i} index={i} dumbImage={DumbImage} />
                            )
                          },
                      ))   
                  })
              )
          }}
          </ProjectContext.Consumer>

          <DragBox>
            <div>
                {this.state.hogs &&
                  <Circle>
                    <Hogs hogs={this.state.hogs} />
                  </Circle>               
                }
            </div> 
          </DragBox>

        <Footer />

      </div>
    );
  }
}
