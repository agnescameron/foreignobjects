import React from 'react';
import DragBox from './DragBox';
import './Components.css';

export default class ProjectModule extends React.Component{
// records delta state of the dragged object

  render() {
	return (
		<DragBox> 
  		<div className="projectModuleFilling">
  		{this.props.project.fields.Image ? <img draggable="false" src={this.props.project.fields.Image[0].url} /> : ''}	      		
  			<div className="projectModuleText">
      		{this.props.project.fields["Project Name"]}
      		</div>
      	</div>  
      	</DragBox>
    );
  }
}
