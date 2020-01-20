import React from 'react';
import './Components.css';

export default class ProjectModule extends React.Component{
// records delta state of the dragged object

  render() {
  	//renders if image present
	return (
	<div>
	{ this.props.project.fields.Image &&
  		<div className="projectLarge">
  		 <img src={this.props.project.fields.Image[0].url} /> 	      		
  			<div className="lineTitle">
      		{this.props.project.fields["Project Name"]}
      		</div>
      	</div>  
      }
    </div>
    );
  }
}
