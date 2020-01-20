import React from 'react';
import './Components.css';

export default class ProjectModule extends React.Component{
// records delta state of the dragged object

  render() {
  	if(this.props.project.fields.Image){
  		console.log("image url", this.props.project.fields.Image[0].url)
  	}
	return (
  	<div className = "ProjectModule">
  		<div className="projectModuleFilling">
  			<div className="projectModuleText">
      		{this.props.project.fields["Project Name"]}
      		</div>
      		{this.props.project.fields.Image ? <img src={this.props.project.fields.Image[0].url} /> : ''}	      		
      	</div>  
      </div>
    );
  }
}
