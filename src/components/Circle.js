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
      console.log(this.props.garyname),
      this.circleRef.current.innerHTML = "The text here needs to be passed here (this.something) as a prop of the class Circle",
      1500
   );
    new CircleType(this.circleRef.current)
}

  render() {
  	return (
		//<div className="hello" content="asdsada" ref={this.myRef.innerHTML} onClick={() => new CircleType(this.myRef).radius(360)}>make Circle</div>	
		<div className="circleText" ref={this.circleRef} />
	)
  }
}
