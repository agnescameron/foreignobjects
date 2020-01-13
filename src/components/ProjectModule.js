import React from 'react';
import './Components.css';
import Image from '../assets/Image.png'
import Draggable from 'react-draggable';

export default class ProjectModule extends React.Component{
// records delta state of the dragged object
  	state = {
	    activeDrags: 0,
	    deltaPosition: {
	      x: 0, y: 0
    },
    controlledPosition: {
      	x: -100, y: 200
    }
 };

	handleDrag = (e, ui) => {
	    const {x, y} = this.state.deltaPosition;
	    this.setState({
	      deltaPosition: {
	        x: x + ui.deltaX,
	        y: y + ui.deltaY,
	  	}
	});
};

  render() {
	const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
	const {deltaPosition, controlledPosition} = this.state;
	return (
		<Draggable onDrag={this.handleDrag} {...dragHandlers}>
      		<div className="projectModule">
          		<div>x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)}</div>
      		</div>  
    	</Draggable>
    );
  }
}
