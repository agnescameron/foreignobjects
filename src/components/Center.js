import React from 'react';
import './Components.css';
import { Link } from 'react-router-dom';

export default class Center extends React.Component{
	constructor (props) {
		super(props);
	}
		
  render() {
 	return (

	      <span  className="centerText">
	      	<Link to="/about">
	        	<span>FOREIGN OBJECTS</span>
	      	</Link>
      	</span>
    );
  }
}
