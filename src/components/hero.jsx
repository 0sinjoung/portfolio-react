import React, {Component} from "react";
import Nav from "./nav";

class Hero extends Component {
  title = React.createRef();

  componentDidMount() {
    setTimeout(() => {
      console.log('start')
      const titleText = 'hello';
      const titleEl = this.title;

      titleText.split("").forEach((e, i) => {
        setTimeout(() => {
          console.log('main')
          titleEl.current.innerHTML = titleEl.current.innerText + e;
        }, 400 * i)
      });

      setTimeout(() => {
        console.log('style')
        titleEl.current.className = titleEl.current.className + ' title-animation-fade';
      }, 400 * titleText.length);

      setTimeout(() => {
        console.log('last')
        titleEl.current.className = 'hero-title title-animation';
        titleEl.current.innerHTML = '<span>Joung</span><span>Yeong</span><span>sin</span>'
      }, 400 * (titleText.length + 1))

    }, 800);
  }

  render() {
    return(
      <section id="hero">
        <div className="hero-cover">
          <h2 className="hero-title" ref={this.title}>
          </h2>
          <span className="blob1"></span>
          <span className="blob2"></span>
          <Nav />
        </div>
      </section>
    );
  }
}

export default Hero;