import React from 'react';
import './Components.css';
import { Link } from 'react-router-dom';
import Circle from './Circle';
export default class ProjectModule extends React.Component{
// records delta state of the dragged object

  render() {
   	const projectURL = this.props.project.fields["Unique URL"]
  	//renders if image present
	return (
		<div>
			{this.props.project.fields["Display on FO Website"] && this.props.project.fields.Image &&
				<div>
			      	<div className={this.props.index%2 === 0 ? "projectLeft" : "projectRight"}>			  			
			      	<div className={this.props.index%2 === 0 ? "projectModuleContainer" : "projectModuleContainerReverse"}>			  			

			  			<div className="projectModuleInfo">
	  			  			<div className="asideTitle">
			  					<Link className="App-link" to={{	pathname: "/" + [projectURL] }}>
									{this.props.project.fields["Project Name"]}
								</Link>
			      			</div>
				  			<div className="asideInfo">
								<div>"{this.props.project.fields["Tag Line"]}"</div>
								<div>{this.props.project.fields.Location}</div>
								<div>{this.props.project.fields["Medium or Tools"]}</div>
								<div>{this.props.project.fields["Services Involved"][0]}
									{this.props.project.fields["Services Involved"][1] 
										&& <span>, {this.props.project.fields["Services Involved"][1]}</span>
										}
										{this.props.project.fields["Services Involved"][2] 
										&& <span>, {this.props.project.fields["Services Involved"][2]}</span>
										}
										</div>
								<div>{this.props.project.fields.Geolocation}</div>
				  			</div>
				
			  			</div>
				  		<div className="imgWrapper">
		  					<Link className="App-link" to={{	pathname: "/" + [projectURL] }}>
					  		 	<img src={this.props.project.fields.Image[0].url} alt={this.props.project.fields["Project Name"]}/>
					  			<div className="lowerLineTitle">
					      			{this.props.project.fields["Project Name"]}
					      		</div>
					  		</Link>
		      			</div>
	      		</div> 
      		</div>
      		</div>
	     }
    	</div>
    );
  }
}
