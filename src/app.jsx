import React, {Component} from "react";
import Header from "./components/header"
import Footer from "./components/footer"
import Contents from "./components/contents"

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Contents />
        <Footer />
      </>
    );
  }
}

export default App;