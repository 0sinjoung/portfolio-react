import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <nav className="nav-links">
        <ul>
          <li className="main-list">
            <a href="#about" className="main-link">about</a>
          </li>
          <li className="main-list">
            <a href="#projects" className="main-link">project</a>
          </li>
          <li className="main-list">
            <a href="#contact" className="main-link">contact</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;