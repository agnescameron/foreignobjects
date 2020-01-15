import React from 'react';
import './Projects.css';
// import { AIRTABLE_API_KEY } from '../keys.js'
const MAX_RECORDS = 20;

const process_api_key = process.env.AIRTABLE_API_KEY;

export default class Projects extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
    }
  }

  componentDidMount() {
  fetch("functions/lambda")
    .then(data => {
       this.setState({ projects: data.records });
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
