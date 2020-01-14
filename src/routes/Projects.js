import React from 'react';
import './Projects.css';
import { AIRTABLE_API_KEY } from '../keys.js'
const MAX_RECORDS = 20;

export default class Projects extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
    }
  }

  componentDidMount() {
    fetch(`https://api.airtable.com/v0/appJVRlTLOZYKPWBs/Table%201?maxRecords=${MAX_RECORDS}&view=Grid%20view&api_key=${AIRTABLE_API_KEY}` )
    .then((resp) => resp.json())
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
