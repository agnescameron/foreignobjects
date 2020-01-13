import React from 'react';
import './Components.css';

export default class Center extends React.Component{
	constructor (props) {
		super(props);
		this.state = {
			Blurb: false,
		};
		// this.toggleBlurb = this.toggleBlurb.bind(this);
}
	toggleBlurb(){
		this.setState({
			Blurb:!this.state.Blurb
		})
	}

  render() {
  	if(this.state.Blurb){
    return (
      	<div className="centerContainer">
	      	<div className="Blurb">
				<p>
				<div onClick={() => this.setState({Blurb: false})}>&#8598;</div>
				<a className="App-link"
            	href=""
            	target="_blank"
            	rel="noopener noreferrer">Foreign Objects</a> is a design studio and consultancy that helps clients execute creative and critical projects in physical, computational and networked space. We are based at NEW INC., at the New Museum in NYC.
				<br/>
				<br/>
				Formed by four foreigners at MIT, we are a collective of interdisciplinary practitioners with expertise in architectural design, web development, electrical engineering and contemporary art. Combining experimentation and research, our work probes at the boundaries of technology, culture and society.      
				<br/>
				<br/>
				Clients we have worked with recently include <a className="App-link"
            	href=""
            	target="_blank"
            	rel="noopener noreferrer">PROPS Paper</a>, <a className="App-link"
            	href=""
            	target="_blank"
            	rel="noopener noreferrer">Agnieszka Kurant</a>, <a className="App-link"
            	href=""
            	target="_blank"
            	rel="noopener noreferrer">Sakiya</a>, <a className="App-link"
            	href=""
            	target="_blank"
            	rel="noopener noreferrer">N3Plus</a>, <a className="App-link"
            	href=""
            	target="_blank"
            	rel="noopener noreferrer">Science Gallery London</a>, <a className="App-link"
            	href=""
            	target="_blank"
            	rel="noopener noreferrer">Karole Armitage</a>, <a className="App-link"
            	href=""
            	target="_blank"
            	rel="noopener noreferrer">Mozilla Foundation</a> and the <a className="App-link"
            	href=""
            	target="_blank"
            	rel="noopener noreferrer">Internet Archive.</a> 
				</p>

			</div>

	{/*				<img src={ufo} /> */}

	{/*			<div className="arrows">
	  	  	<div className="leftArrow" onClick={() => this.setState({Blurb: false})}>L</div> 
		  		<div className="rightArrow" onClick={() => this.setState({Blurb: true})}>R</div> 
	  		</div>    */}
  	  	</div>	

  	);} else {
 	return (
 		<div className="centerContainer">

	      <div className="centerText" onClick={() => this.setState({Blurb: true})}>
	        FOREIGN OBJECTS
	      </div>

	{/*			<div className="arrows">
		  	  	<div className="leftArrow" onClick={() => this.setState({Blurb: false})}>L</div> 
		  	  <div className="rightArrow" onClick={() => this.setState({Blurb: true})}>R</div>    
	  	  	</div> */}
	    </div>  
    );
  }
}
}