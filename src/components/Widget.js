import React from 'react';
import './Components.css';
import CircleType from 'circletype';
import WorkButton from '../assets/WorkButton.png';

export default class Widget extends React.Component{
	constructor (props) {
		super(props);
  }

// componentDidMount(){
//   new CircleType(this.circleRefObject.current)
//   // console.log(this.circleRefObject.current)
//   // this.circleRefObject.current identifies the div below as its DOM and runs CircleType on it.
//   // CircleType looks for its innerHTML and makes it round.
//   // All this time you were trying to make it look for the innerHTML of the returned div but you can just ... give it innerHTML. 
// }

  render() {

//props for different widgets
    const type = {
      projects : "/projects",
      thoughts : "/thoughts",
      about : "/about",
      none : "none",
    }

    const place = {
      one : "Widget widgetPositionOne",
      two : "Widget widgetPositionTwo",
      three : "Widget widgetPositionThree",
      four : "Widget widgetPositionFour",
    }

  	return (
		<a href={this.props.type} className={this.props.place}><img draggable="false" src={this.props.children} /></a>
	)
  }
}
