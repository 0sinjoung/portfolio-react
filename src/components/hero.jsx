import React, {Component} from "react";

class Hero extends Component {
  render() {
    return(
      <section id="hero">
        <div class="hero-cover">
          <h1 class="hero-title">Hello
            <span class="hero-icon"></span>
          </h1>
          <nav class="nav-links">
            <ul>
              <li class="main-list">
                <a href="#about" class="main-link">about</a>
              </li>
              <li class="main-list">
                <a href="#projects" class="main-link">project</a>
              </li>
              <li class="main-list">
                <a href="#contact" class="main-link">contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    );
  }
}

export default Hero;