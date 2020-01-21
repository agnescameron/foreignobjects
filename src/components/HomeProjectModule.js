import React from 'react';
import './Components.css';
import '../routes/Projects.css';

export default class HomeProjectModule extends React.Component{
// records delta state of the dragged object

  render() {
  	//renders if image present
	return (
	<div>
	{ this.props.project.fields["Project Name"] === "Internet as a City" &&
  		<div className="projectHome imgWrapper">
  		 <img draggable="false" src={this.props.project.fields.Image[0].url} /> 	      		
  			<div className="homeProjectModuleText">
      		{this.props.project.fields["Project Name"]}
      		</div>
      	</div>  
      }
    </div>
    );
  }
}