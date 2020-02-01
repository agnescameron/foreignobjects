import React from 'react';
import './Components.css';
import Draggable from 'react-draggable';


export default class DragBox extends React.Component{
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
	          			 {this.props.children}
    	</Draggable>
    );
  }
}
