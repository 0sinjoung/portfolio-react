import React, {Component} from "react";
import Header from "./components/header"
import Footer from "./components/footer"
import Contents from "./components/contents"

class App extends Component {
  state = {
    isMenuBtnOn: false,
  }
  
  handleMenuClick = () => {
    this.setState(prevState => ({isMenuBtnOn: !prevState.isMenuBtnOn}));
  }

  render() {
    let containerClassName = 'container';
    if(this.state.isMenuBtnOn) {
      containerClassName += ' on';
    } 

    return (
      <div className={containerClassName}>
        <Header onHandleCover={this.handleMenuClick} isMenuOn={this.state.isMenuBtnOn}/>
        <Contents />
        <Footer />
      </div>
    );
  }
}

export default App;