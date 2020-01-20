import React from 'react';
import './Projects.css';

export default class Projects extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        projects: [],
        }
    }
    
    componentDidMount() {
        fetch(".netlify/functions")
        .then(data => {
              this.setState({ projects: data });
              console.log("projects", data);
              }).catch(err => {console.log(err)});
    }
    
    render() {
        return (
                <div className="App">
                p r o j e c t s
                </div>
                );
    }
}
