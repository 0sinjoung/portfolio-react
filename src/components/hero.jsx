import React, {Component} from "react";
import Nav from "./nav";

class Hero extends Component {
  render() {
    return(
      <section id="hero">
        <div className="hero-cover">
          <h1 className="hero-title">Hello
            <span className="hero-icon"></span>
          </h1>
          <Nav />
        </div>
      </section>
    );
  }
}

export default Hero;