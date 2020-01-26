import React from 'react';
import Projects from './Projects';
import ProjectModule from '../components/ProjectModule';
import { Link, Switch, useParams, Route } from 'react-router-dom';
import ProjectProvider from '../ProjectProvider';
import ProjectContext from '../ProjectContext';

export default class ProjectPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        	id: '',
        }
    }

	static contextType = ProjectContext;

	componentDidMount() {
		// store the URL param/slug as id in the state
		const { id } = this.props.match.params;
		this.setState({id: id})
	}

  render () {
  		// return current proejct by matching id with the "Unique URL" field in the object 
  		const project = this.context.find(o => o.fields["Unique URL"] === this.state.id);
  		console.log("project is ", project);

  	return (
      <div className="App Bg-blue">
		{project &&
		
		<div>
		<ProjectContext.Consumer>
			{value => { return (				
			<div>
	  		<div className=" projectLeft imgWrapper">
	  		 	<img src={project.fields.Image[0].url} />
	  			<div className="upperLineTitle">
					{project.fields["Project Name"]}
	      		</div>
				<div>
					{project.fields.Description}
				</div>
	  		</div>
			</div>
				)
				}
			}

		</ProjectContext.Consumer>	
		</div>
	}
		</div>
	  );	
	 }
	}  


  
  
	

