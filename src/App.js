import React from 'react';
import Left from './components/Left';
import Top from './components/Top';
import Right from './components/Right';
import Bottom from './components/Bottom';
import Center from './components/Center';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <Top />
        <Center />
        <Left />
        <Right />
        <Bottom />
      </div>
    );
  }
}

export default App;
