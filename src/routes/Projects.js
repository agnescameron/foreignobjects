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
        fetch(".netlify/functions/lambda")
        .then(response => {
              console.log("projects", response.body);
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
