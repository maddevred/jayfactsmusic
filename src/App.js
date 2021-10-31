import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import aboutMe from "./AboutMe";
import skills from "./Skills";
import projects from "./Projects";
import contactMe from "./ContactMe";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Section
          title="About Me"
          subtitle={aboutMe}
          dark={false}
          id="section1"
        />
        <Section
          title="Skills"
          subtitle={skills}
          dark={true}
          id="section2"
        />
        <Section
          title="Projects"
          subtitle={projects}
          dark={false}
          id="section3"
        />
        <Section
          title="Contact Me"
          subtitle={contactMe}
          dark={true}
          id="section4"
        />
      </div>
    );
  }
}

export default App;