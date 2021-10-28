import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <nav className="nav-links">
        <ul>
          <li className="nav-list">
            <a href="#about" className="nav-link">about</a>
          </li>
          <li className="nav-list">
            <a href="#projects" className="nav-link">project</a>
          </li>
          <li className="nav-list">
            <a href="#contact" className="nav-link">contact</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;