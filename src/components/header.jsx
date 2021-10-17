import React, {Component} from "react";

class Header extends Component {
  render() {
    return (
    <header id="main-header">
      <button type="menu" class="menu-bars">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <h1 class="header-title">
        <a href="/.">
          Frontend developer
        </a>
      </h1>
    </header>
    );
  }
}

export default Header;