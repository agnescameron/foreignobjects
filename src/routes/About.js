import React from 'react';

import './About.css';
import Circle from '../components/Circle.js';
import Top from '../components/Top';
import aboutImage from "../assets/aboutImage.png";
import DragBox from '../components/DragBox';

import { Link } from 'react-router-dom';

export default class About extends React.Component{

  render() {
    return (
      <div className="App Bg-blue">
        <div className="aboutContainer">
          <Top hovering="true" />
          <div className="mobileHeader">FOREIGN OBJECTS</div>
          <div className="mobileNavContainer">
            <div className="mobileNavLeft"><span><Link to='/' className="Orange Arrow">&#8598;</Link>HOME</span></div>
            <div className="mobileNavCenter">ABOUT<span><Link to='/About' className="Orange Arrow">&#8600;</Link></span></div>
            <div className="mobileNavRight">WORK<span><Link to='/Projects' className="Orange Arrow">&#8594;</Link></span></div>
          </div>          
          <div className="About">
            <div className="Verso">
                <Link to='/' className="backArrow App-link" />
              <div className="aboutBody">
                <div>
                  <Link to='/' className="App-link Orange">FOREIGN OBJECTS LLC</Link> is a design and research studio exploring the internet through the production of cultural artifacts. We build environments, tools and discourses that imagine new ways of living with the web.  
                  <br/>
                  <br/>
                  Formed by four foreigners at MIT, the interdisciplinary nature of our work draws on backgrounds in engineering, architecture, web design and conceptual art. Meeting at the intersection of technology, culture and the built environment, our collaboration interrogates the networked world with curious and critical eye. We work with artists, institutions and organizations to build projects that create more playful, experimental, and meaningful connections between the internet and society.
                  <br/>
                  <br/>
                  FOREIGN OBJECTS's work has been presented publicly at The Internet Archive's Decentralized Web Summit (2018), the New Museum's cultural incubator (NEW INC. 2019-20) and the Bauhaus-100 Internationales Kolloquium (2019). In 2019 we were recipients of the Mozilla Creative Media Award, for a project exploring the future of human-like chatbots and other autonomous agents in society.
                  <br/>
                  <br/>
                  Individually, we work across a range of tactics and tools, from circuit design to art criticism. Our work has appeared in Postmasters Gallery, Schloss Solitude+ZKM, Delfina Foundation, Yve YANG Gallery, Frieze Magazine, Interface Critique Journal, Journal of Design and Science, Sakiya, Science Gallery London, SFMOMA, MIT School of Architecture and Planning, AIGA Eye on Design and Dutch Design Week. 
                  <br/>
                  <br/>
                  Clients we have worked with recently include <a className="App-link"
                        href="http://propspaper.com/"
                  target="_blank"
                  rel="noopener noreferrer">PROPS Paper</a>, <a className="App-link"
                  href="http://www.tanyabonakdargallery.com/artists/agnieszka-kurant"
                  target="_blank"
                  rel="noopener noreferrer">Agnieszka Kurant</a>, <a className="App-link"
                  href="http://www.sakiya.org"
                  target="_blank"
                  rel="noopener noreferrer">Sakiya</a>, N3Plus, <a className="App-link"
                  href="https://london.sciencegallery.com/seasons/dark-matter"
                  target="_blank"
                  rel="noopener noreferrer">Science Gallery London</a>, <a className="App-link"
                  href="https://www.armitagegonedance.org/"
                  target="_blank"
                  rel="noopener noreferrer">Karole Armitage</a>.
                  <br/>
                  <br/>
                  We are based at <a
                  className="App-link"
                  href="https://www.newinc.org/year-6-members/agnes-cameron-gary-zhexi-zhang-kalli-retzepi-sam-ghantous"
                  target="_blank"
                  rel="noopener noreferrer"
                  >NEW INC.</a>, at the New Museum in NYC. 
                </div>
                </div>

                    <div className="aboutCapabilitiesContainer">
                      <div className="aboutHeading">
                        CAPABILITIES
                      </div>
                       <div className="aboutCapabilities">      
                        <div>
                          Exhibition Design<br />
                          Web Development<br />
                          Website Design<br />
                          Simulation Design & Modeling<br />
                          Cultural Strategy & Insight<br />
                          Concept Design<br />
                          Visual Identity Systems<br />
                        </div>
                        <div>      
                          UX/UI Design<br />
                          Software Development<br />
                          Electronics Prototyping<br />
                          Publication Design & Editing<br />
                          Artists' Technical Consultation<br /> 
                          Environmental Design<br />
                          Architectural Design<br />
                          Sound Design<br />
                          Video Post-Production<br />
                        </div>
                      </div>
                    </div>

                    <div className="aboutBioContainer">
                      <div className="aboutHeading">WHO ARE WE</div>

                      <div className="aboutBio">
                        <img src="https://dl.airtable.com/.attachmentThumbnails/65e9a6bf98bb13a3d14cb74dbb9678f2/444f9fe3" className="aboutBioImage" />
                          <div className="aboutBioInfo">
                            <div className="aboutBioHeading">
                              AGNES FURY CAMERON</div>
                            <div className="aboutBioBody">
                              Agnes Fury Cameron (b. Brighton, UK) is a co-director of FOREIGN OBJECTS, where she develops hardware and software, and leads technical research projects. Her interests include simulation and modelling, machine intelligence and environmental sensing. She is a graduate of the MIT Media Lab, and holds a MEng degree in Information and Computer Engineering from the University of Cambridge.
                            </div>
                          </div>
                      </div>

                      <div className="aboutBio">
                        <img src="https://dl.airtable.com/.attachmentThumbnails/7918db4ff2cfca513a08b5b55a294719/f7a16ff9" className="aboutBioImage" />
                          <div className="aboutBioInfo">
                            <div className="aboutBioHeading">
                              SAM GHANTOUS</div>
                            <div className="aboutBioBody">
                              Sam Ghantous (b. Muscat, Oman) is a co-director of FOREIGN OBJECTS, where he leads design projects focusing on architecture, exhibition design, and graphics. Sam has taught at Cornell AAP and MIT School of Architecture, from where he received his Master of Architecture. Sam's work addresses form, program, and media for working, living, and coming together under contemporary technological and social change.
                            </div>
                          </div>
                      </div> 

                      <div className="aboutBio">
                        <img src="https://dl.airtable.com/.attachmentThumbnails/8b59dc95956e1c49c86edc614eeef7dd/f0a2796f" className="aboutBioImage" />
                          <div className="aboutBioInfo">
                            <div className="aboutBioHeading">
                              KALLI RETZEPI</div>
                            <div className="aboutBioBody">
                              Kalli Retzepi (b. Thessaloniki, Greece) is a co-director of FOREIGN OBJECTS. She is a graduate of the MIT Media Lab and also holds advanced degrees in engineering and neuroscience. Her work uses technology, design and images in order to explore the politics of digital interfaces, the narrative of the user and to imagine new metaphors for the Web.
                            </div>
                          </div>
                      </div>

                      <div className="aboutBio">
                        <img src="https://dl.airtable.com/.attachmentThumbnails/895de0c593f4aa41de5f3ec5e342a66d/07cc1aba" className="aboutBioImage" />
                          <div className="aboutBioInfo">
                            <div className="aboutBioHeading">
                              GARY ZHEXI ZHANG</div>
                            <div className="aboutBioBody">
                              Gary Zhexi Zhang (b. Suzhou, China) is a co-director of FOREIGN OBJECTS, where he focuses on cultural consultancy, curatorial research and exhibition design projects. He is an artist and writer whose work navigates socio-technical systems such as ecology, finance and the web. Gary received his S.M. from the MIT Program in Art, Technology and teaches communication design at the New School.
                            </div>
                          </div>
                      </div>                
                    </div>

              </div>

            <div className="Recto">
            </div>

              {/*<DragBox><Circle>look wow it turns this took soooo long to make i hope you like it</Circle></DragBox>*/}
              <img src={aboutImage} className="aboutImage" alt="About Us" />
            </div>
        </div>  
      </div>
    );
  }
}
