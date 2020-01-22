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
    	      	<div className="Blurb">
				<p>
				<div className="blurbArrow" onClick={() => this.setState({Blurb: false})}><a className="App-link">&#8598;</a></div>
				Foreign Objects is a design studio and consultancy working in physical and digital space. We create cultural artifacts and new imaginaries for life on the internet.
				<br/>
				<br/>
				Formed by four foreigners at MIT, we are a collective of interdisciplinary practitioners with expertise in architecture, web development, engineering and conceptual art. We work with artists, institutions and companies to research and build projects that explore boundaries of technology and society.      
				<br/>
				<br/>
				Clients we have worked with recently include <a className="App-link"
            	href="http://propspaper.com/"
            	target="_blank"
            	rel="noopener noreferrer">PROPS Paper</a>, <a className="App-link"
            	href="http://www.tanyabonakdargallery.com/artists/agnieszka-kurant"
            	target="_blank"
            	rel="noopener noreferrer">Agnieszka Kurant</a>, <a className="App-link"
            	href="http://www.sakiya.org"
            	target="_blank"
            	rel="noopener noreferrer">Sakiya</a>, N3Plus, <a className="App-link"
            	href="https://london.sciencegallery.com/seasons/dark-matter"
            	target="_blank"
            	rel="noopener noreferrer">Science Gallery London</a>, <a className="App-link"
            	href="https://www.armitagegonedance.org/"
            	target="_blank"
            	rel="noopener noreferrer">Karole Armitage</a>.
            	<br/>
            	<br/>
            	We are based at <a
	            className="App-link"
	            href="https://www.newinc.org/year-6-members/agnes-cameron-gary-zhexi-zhang-kalli-retzepi-sam-ghantous"
	            target="_blank"
	            rel="noopener noreferrer"
          		>NEW INC.</a>, at the New Museum in NYC. 
				</p>
		</div>

  	);} else {
 	return (

	      <div className="centerText" onClick={() => this.setState({Blurb: false})}>
	        <div>FOREIGN OBJECTS</div>
	        <div className="centerArrow"><span className="Arrow">&#8599;</span></div>
	      </div>
    );
  }
}
}
