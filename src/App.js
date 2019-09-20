import React from 'react';
import Left from './components/Left';
import Top from './components/Top';
import Right from './components/Right';
import Bottom from './components/Bottom';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovering : false
    }
  }

  handleEnter = (event) => {
    event.preventDefault()
    this.setState(prevState => ({hovering: true}))
  }
  handleLeave = (event) => {
    event.preventDefault()
    this.setState(prevState => ({hovering: !prevState.hovering}))
  }
  handleClick= (event) => {
    event.preventDefault()
    window.location = "mailto:hello@foreignobjects.net";
  }

  render() {
    return (
      <div className="App">
        <Top hovering={this.state.hovering}/>
        <div className="Center"
        onMouseEnter={this.handleEnter}
        onMouseLeave={this.handleLeave}
        >
          FOREIGN OBJECTS
        </div>
        <Left hovering={this.state.hovering}/>
        <Right hovering={this.state.hovering}/>
        <Bottom hovering={this.state.hovering}/>
      </div>
    );
  }
}

export default App;
