import React from 'react';
import './Components.css';

export default class ProjectModule extends React.Component{
// records delta state of the dragged object

  render() {
	return (
  		<div className="projectModule">
      		{this.props.project.fields["Project Name"]}	      		
      	</div>  
    );
  }
}
