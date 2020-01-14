import React from 'react';
import './Components.css';
import CircleType from 'circletype';

export default class Circle extends React.Component{
	constructor (props) {
		super(props);
	    this.circleRef = React.createRef();
  }

componentDidMount(){
  this.check()
}

  check = () => {
    setTimeout(
      () => this.circleRef.current.innerHTML  = "Testing Circle",
      500
   );
 }

  render() {
  	return (
		//<div className="hello" content="asdsada" ref={this.myRef.innerHTML} onClick={() => new CircleType(this.myRef).radius(360)}>make Circle</div>	
		<div 
		className="circleTest"
		ref={this.circleRef}
		onClick={() => new CircleType(this.circleRef.current)}>
		</div>
	)
  }
}

