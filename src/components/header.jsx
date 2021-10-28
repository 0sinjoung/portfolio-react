import React, {Component} from "react";

class Header extends Component {
  render() {
    console.log('Menu Btn: '+this.props.isMenuOn);

    return (
    <header id="main-header">
      <div className="btn-container">
        <button type="menu" className="menu-btn" onClick={this.props.onHandleCover}>
          <span></span>
        </button>
      </div>
      <h1 className="header-title">
        <a href="/.">Frontend developer</a>
      </h1>
      <nav className="header-nav">
        <ul className="nav-lists" onClick={this.props.onHandleCover}>
          <li className="header-nav-list">
            <a href="#about">About</a>
          </li>
          <li className="header-nav-list">
            <a href="#projects">Project</a>
            <ul>
              <li className="project-list">
                <a href="/.">Typography Scale</a>
              </li>
              <li className="project-list">
                <a href="/.">What do I drink today</a>
              </li>
            </ul>
          </li>
          <li className="header-nav-list">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
    );
  }
}

export default Header;