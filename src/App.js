import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import ProjectProvider from './ProjectProvider';
import Home from './routes/Home';
import About from './routes/About';
import Projects from './routes/Projects';
import ProjectPage from './routes/ProjectPage';
import AltHome from './routes/AltHome';

import './App.css';



class App extends React.Component {
  render() {
    console.log(window.innerWidth, window.innerHeight)
    return (
      <ProjectProvider>

      <BrowserRouter>

        <Helmet>
          <title>FOREIGN OBJECTS</title>
          <meta name="description" content="A research studio and consultancy based in NYC." />
          <meta name="keywords" content="design, consultancy, NEW INC, MIT, Media Lab, ACT, decentralization, Kallirroi, Retzepi, Agnes Cameron, Ghantous, Zhexi, architecture, software" />
        </Helmet>

        <Switch>  

          {/*<Link to="/" className="App-link">Home</Link>*/}
          {/*<Link to="/about" className="App-link-about">About</Link>*/}
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/althome" component={AltHome} />
          <Route exact path="/projects" component={Projects} />
          <Route path="/:id" component={ProjectPage} />
        </Switch>

      </BrowserRouter>
    </ProjectProvider>
    );
  }
}

export default App;
