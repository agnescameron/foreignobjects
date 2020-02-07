import React from 'react';
import './Components.css';
import '../routes/Projects.css';
import ProjectContext from '../ProjectContext';
import DragBox from '../components/DragBox';
import { Link } from 'react-router-dom';

export default class Objects extends React.Component{
// records delta state of the dragged object

static contextType = ProjectContext;

  render() {
    const index = this.props.index
    const dumbImage = this.props.dumbImage[index]
    console.log(dumbImage)

	return (
    <div>
       <DragBox>
        <img draggable="false" className="dumbObject" src={dumbImage.url}/>               
        </DragBox>     
    </div>
    );
  }
}
