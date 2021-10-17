import React, { Component } from 'react';
import Hero from "./hero";
import About from "./about";
import Project from "./project";
import Contact from "./contact";

class Main extends Component {
  render() {
    return (
      <>
        <Hero />
        <About />
        <Project />
        <Contact />
      </>
    );
  }
}

export default Main;