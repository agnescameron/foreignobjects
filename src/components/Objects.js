import React from 'react';
import './Components.css';
import '../routes/Projects.css';
import ProjectContext from '../ProjectContext';
import DragBox from '../components/DragBox';

export default class Objects extends React.Component{
// records delta state of the dragged object

  render() {
    
    const index = this.props.index
    const dumbImage = this.props.dumbImage[index]
    // console.log(dumbImage)

    var image = document.images[0];
    var downloadingImage = new Image();
    
    downloadingImage.src = "../assets/bg-4.gif";

    downloadingImage.onload = function(){
    image.src = this.src;  
    };


    let dumbObjectStyle = {

      'width': (Math.floor(Math.random() * 30)) + '%',
      'position': 'absolute',
      // 'border': '1px white dashed',
      'borderRadius': '5px',
      'left': (Math.floor(Math.random() * window.innerWidth - 200)),
      'top': (Math.floor(Math.random() * window.innerHeight - 150)),
      'zIndex': '100',
      '-webkit-animation' : 'fadein ' + (20 - (Math.floor(Math.random() * 20))) + 's',
      'display': 'none',
      'background-image': 'none',
       'border': 'dashed white 1px',
      'border-radius': '5px',
    }

  return (
    <div>
       <DragBox>
        <img draggable="false" style={dumbObjectStyle} src={dumbImage.url} alt={dumbImage.url} />           
        </DragBox>
    </div>
    );
  }
}
