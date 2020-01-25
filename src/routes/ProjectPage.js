import React from 'react';
import Projects from './Projects';
import ProjectModule from '../components/ProjectModule';
import { Link, Switch, useParams, Route } from 'react-router-dom';

export default class ProjectPage extends React.Component{
    constructor(props) {
        super(props);
    }

  render () {
  	let project = this.props.location.state !== undefined ?  this.props.location.state.project : '';
  	console.log("project is ", project);
  	return (
		<div>
			<ProjectID />
			hello hello
		</div>

	  );	
	 }
	}  

  function ProjectID() {
		let { id } = useParams();
		console.log({id});
		return (
		    <div>
    		  {id}
		    </div>
    	);
	}


  
  
	

