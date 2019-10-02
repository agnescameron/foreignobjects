import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './routes/Home';
import About from './routes/About';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        {/* <Link to="/" className="App-link">Home</Link>
        <Link to="/about" className="App-link">About</Link> */}
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
    </Router>
    );
  }
}

export default App;
