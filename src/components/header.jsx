import React, {Component} from "react";

class Header extends Component {
  render() {
    console.log('Menu Btn: '+this.props.isMenuOn);

    return (
    <header id="header">
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
              <li className="header-project">
                <a href="#typography-scale">Typography Scale</a>
              </li>
              <li className="header-project">
                <a href="#what-do-i-drink-today">What do I drink today</a>
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