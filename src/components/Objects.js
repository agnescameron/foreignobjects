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
    // console.log(dumbImage)
    let dumbObjectStyle = {

      'width': ((Math.floor(Math.random() * 30))) + '%',
      'position': 'absolute',
      'border': '1px white dashed',
      'borderRadius': '50px',
      'left': (Math.floor(Math.random() * window.innerWidth - 200)),
      'top': (Math.floor(Math.random() * window.innerHeight - 150)),
      'z-index': '100'
    }

  return (
    <div>
       <DragBox>
        <img draggable="false" style={dumbObjectStyle} src={dumbImage.url}/>           
        </DragBox>
    </div>
    );
  }
}
