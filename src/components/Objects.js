import React from 'react';
import './Components.css';
import '../routes/Projects.css';
import DragBox from '../components/DragBox';

export default class Objects extends React.Component{
// records delta state of the dragged object

  render() {
    
    const index = this.props.index
    const dumbImage = this.props.dumbImage[index]
    const fileName = (this.props.dumbImage[index].filename).substring(0, (this.props.dumbImage[index].filename).length -4)
    console.log(dumbImage)

    // var image = document.images[0];
    // var downloadingImage = new Image();
    
    // downloadingImage.src = "../assets/bubbles.gif";

    // downloadingImage.onload = function(){
    // image.src = this.src;  
    // };


    let dumbObjectStyle = {

      'width': ( 2 + (Math.floor(Math.random() * (20 + Math.floor(Math.random() * 30)))) ) + '%',
      'position': 'absolute',
      'borderRadius': '5px',
      'left': (Math.floor(Math.random() * window.innerWidth - 200)),
      'top': (Math.floor(Math.random() * window.innerHeight - 100)),
      'zIndex': '100',
      'WebkitAnimation' : 'fadein ' + (13 - (Math.floor(Math.random() * 12))) + 's',
      // 'WebkitTransition' : (30 - (Math.floor(Math.random() * 12))) + 's',
      'background-image': 'url("../assets/bg-4.gif")',
       // 'border': 'dashed white 1px',
       // 'display': 'none',
    }

    let dumbObjectNone = {
      'display': 'none',
    }

  return (
    <div>
       <DragBox>
        <img draggable="false" style={window.innerWidth > 800 ? dumbObjectStyle : dumbObjectNone} src={dumbImage.url} alt={fileName} title={fileName} />           
      </DragBox>
    </div>
    );
  }
}
