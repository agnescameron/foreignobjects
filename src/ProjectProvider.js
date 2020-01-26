import React from 'react';
import ProjectContext from './ProjectContext';

class ProjectProvider extends React.Component {
	    constructor(props) {
        super(props);
        this.state = {
        projects: [],
        };
    }
    
    componentDidMount() {
        fetch(".netlify/functions/lambda")
        .then(function(response) {
          console.log(response)
          return response.json();
        }).then( (data) => {
          //omits projects tagged as private
          var publicProjects = data.records.filter(function(project){ 
            if(project.fields["Release Status"]){
              return project.fields["Release Status"].includes("Personal–Private") === false; }
            })
          // console.log(publicProjects);
          this.setState({projects: publicProjects});
        }).catch(err => {console.log(err)});
    }

    render() {
	    var projects = this.state.projects;
        return (

            <ProjectContext.Provider value={projects}>
                {this.props.children}
            </ProjectContext.Provider>
        );
    }
}

export default ProjectProvider;
