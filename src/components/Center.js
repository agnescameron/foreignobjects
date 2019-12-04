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
      <div className="Blurb" onClick={() => this.setState({Blurb: false})}>
		<p>
		Foreign Objects helps clients to research and execute projects in the field of art and technology, with an emphasis on web-based products and experiences.
		</p>
		<p>
		With expertise in architectural design, web development, electrical engineering and conceptual art practice, Foreign Objects combines experimentation, research and practice to realize ambitious projects that probe the boundaries of technology and culture.      
		</p>
		</div>
  	);} else {
 	return (
      <div className="Center" onClick={() => this.setState({Blurb: true})}>
        FOREIGN OBJECTS
      </div>
    );
  }
}
}