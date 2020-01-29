import React from 'react';
import './Components.css';
import '../routes/Projects.css';
import ProjectContext from '../ProjectContext';
import DragBox from '../components/DragBox';
import { Link } from 'react-router-dom';

export default class HomeProjectModule extends React.Component{
// records delta state of the dragged object

static contextType = ProjectContext;

  render() {
  const index = this.props.index
  console.log(this.props.project[index].fields["Project Name"])
  const project = this.props.project[index]
	return (
  <DragBox>
      <div className="projectHome imgWrapper">
         <img draggable="false" src={project.fields["Cover Image"][0].url} />             
              <div className="Unselectable homeProjectModuleText">
                <Link className="App-link" to={{  pathname: "/" + [project.fields["Unique URL"]] }}>  
                  <span className="arrowNW" />
                </Link>
                {project.fields["Project Name"]}
              </div>  
        </div> 
    </DragBox>     
    );
  }
}