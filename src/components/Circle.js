import React from 'react';
import './Components.css';
import CircleType from 'circletype';

export default class Circle extends React.Component{
	constructor (props) {
		super(props);
	    this.circleRefObject = React.createRef();
  }

componentDidMount(){
  new CircleType(this.circleRefObject.current)
  console.log(this.circleRefObject.current)
  // this.circleRefObject.current identifies the div below as its DOM and runs CircleType on it.
  // CircleType looks for its innerHTML and makes it round.
  // All this time you were trying to make it look for the innerHTML of the returned div but you can just ... give it innerHTML. 
}

  render() {
  	return (
		<div className="circleText" ref={this.circleRefObject}>{this.props.children}</div>
	)
  }
}
