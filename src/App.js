// import './index.css';
import React, {Component} from "react";
import MenuBtn from "./components/MenuBtn"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import About from "./components/About"
import Project from "./components/Project"
import Contact from "./components/Contact"


class App extends Component {
  render() {
    return (
      <div className="App">
        <MenuBtn></MenuBtn>
        <Header></Header>
        <main>
          <Hero></Hero>
          <About></About>
          <Project></Project>
          <Contact></Contact>
        </main>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;