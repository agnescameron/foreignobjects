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
  // console.log(this.props.index<2)
  const project = this.props.project[index]
	return (
  <DragBox>
    { this.props.index<2 &&
      <div className={this.props.index%2 === 0 ? "projectHome imgWrapper": "projectHomeOffset imgWrapper"}>
         <img draggable="false" src={project.fields["Cover Image"][0].url} alt={project.fields["Project Name"]}/>             
                <div className="Unselectable homeProjectModuleText">
                  <Link className="App-link" to={{  pathname: "/" + [project.fields["Unique URL"]] }}>
                  <span className="arrowNW" />{project.fields["Project Name"]}
                  </Link>
                </div>
        </div>  }
    </DragBox>     
    );
  }
}
