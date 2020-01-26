import React from 'react';
import './Components.css';
import { Link } from 'react-router-dom';

export default class ProjectModule extends React.Component{
// records delta state of the dragged object

  render() {
   	const projectURL = this.props.project.fields["Unique URL"]
  	//renders if image present
	return (
		<div>
			{this.props.project.fields["Display on FO Website"] && this.props.project.fields.Image &&
				<div>
			      	<div className={this.props.index%2 === 0 ? "projectRight" : "projectLeft"}>
	  					<Link to={{	pathname: "/" + [projectURL] }}>
				  		<div className="imgWrapper">
				  			<div className="upperLineTitle">
				      			{this.props.project.fields["Project Name"]}
				      		</div>
				  		 	<img src={this.props.project.fields.Image[0].url} />
				  			<div className="lowerLineTitle">
				      			{this.props.project.fields["Project Name"]}
				      		</div>
				  		</div>
				  		</Link>
			      	</div>
	      		</div> 
	     }
	    </div>
    );
  }
}
