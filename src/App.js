import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Home from './routes/Home';
import About from './routes/About';
import Projects from './routes/Projects';
import AltHome from './routes/AltHome';


import './App.css';

class App extends React.Component {
  render() {
    console.log(window.innerWidth, window.innerHeight)
    return (
      <Router>

        <Helmet>
          <title>FOREIGN OBJECTS</title>
          <meta name="description" content="A research studio and consultancy based in NYC." />
          <meta name="keywords" content="design, consultancy, NEW INC, MIT, Media Lab, ACT, decentralization, Kallirroi, Retzepi, Agnes Cameron, Ghantous, Zhexi, architecture, software" />
        </Helmet>

        {/*<Link to="/" className="App-link">Home</Link>*/}
        {/*<Link to="/about" className="App-link-about">About</Link>*/}
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/altHome" component={AltHome} />
        
    </Router>
    );
  }
}

export default App;
