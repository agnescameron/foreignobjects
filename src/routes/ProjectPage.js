import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectPage.css';
import ProjectContext from '../ProjectContext';
import Top from '../components/Top';

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
  		console.log(project);
  	return (
      <div className="App Bg-white">
	      <div className="projectPageContainer">
		  <Top hovering="true" />
				<div className="projectPage">
				<div className="Verso">
			        <Link to='/projects' className="App-link backArrow" />

					{project &&	
						<ProjectContext.Consumer>
							{value => { return (
								<div>	
									<div className="headerMargin">		
							{/*} 	<img src={project.fields.Image[0].url} /> */}
							  		    <div className="projectTitle">
							  		    <Link to='/Projects' className="mobileBackArrow App-link Orange arrowNW" />{project.fields["Project Name"]}</div>
										<div className="projectTag">"{project.fields["Tag Line"]}"</div>
										
										<div className="headerDetails">

											{project.fields.Event &&
												<div className="projectEvent">
													<a className="App-link Orange arrowW" href={project.fields["Event Link"]} />
													{project.fields.Event}
												</div>
											}

											{project.fields.Location &&											
												<div className="projectLocation">
													<a href={project.fields["Location Link"]} className="App-link Orange arrowE" />
													{project.fields.Location}
												</div>
											}

											{project.fields.Year &&
												<div className="projectLink">
														{project.fields.Year}
												</div>
											}

											{project.fields.links &&
												<div className="projectLink">
													<a href={project.fields.links} className="App-link Orange arrowSE">
														{project.fields.links}
													</a>
												</div>
											}
										</div>
									</div>
								</div>
								)}
							}
						</ProjectContext.Consumer>	
					}
				</div>

				<div className="Recto">
					{project &&	
					<ProjectContext.Consumer>
						{value => { return (	
							<div>
									<div className="imgWrapper">		
						  		 		<img src={project.fields.Image[0].url} className="projectImage"/> 
										<div className="projectImageCaption">
											{/* add code here to trim slug from image URL/filename and use as caption 
											{project.fields.Image[0].url} */}
										</div>
									</div>
							</div>
							)}
						}
					</ProjectContext.Consumer>	
					}
				</div>

					<div className="Verso">
					{project &&	
					<ProjectContext.Consumer>
						{value => { return (	
							<div>
				  		 		{project.fields.Image[1] && 
									<div className="imgWrapper">		
					  		 			<img src={project.fields.Image[1].url} className="projectImage"/> 
										<div className="projectImageCaption">
											{/* add code here to trim slug from image URL/filename and use as caption 
											{project.fields.Image[0].url} */}
										</div>
									</div>
								}
							</div>
							)}
						}
					</ProjectContext.Consumer>	
					}
				</div>

					<div className="Recto">
					{project &&	
					<ProjectContext.Consumer>
						{value => { return (
							<div>	
								{project.fields.Description &&
									<div>
										<div className="projectBody">	
												<div>{project.fields.Description}</div>
										</div>
									</div>
								}
							</div>
							)}
						}
					</ProjectContext.Consumer>	
					}
				</div>
			</div>
		  </div>
	  </div>
  );	
 }
}  


  
  
	

