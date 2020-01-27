import React from 'react';
import './Components.css';
import '../routes/Projects.css';
import ProjectContext from '../ProjectContext';

export default class HomeProjectModule extends React.Component{
// records delta state of the dragged object

static contextType = ProjectContext;

  render() {
  const index = this.props.index
  console.log(this.props.project[index].fields["Project Name"])
  const project = this.props.project[index]
	return (
    <div>{project.fields["Project Name"]}</div>
    );
  }
}