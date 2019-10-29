import React from "react";
import logo from "./logo.svg";
import "./Reset.css";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      menuStatus: "menu-open",
      menuRef: React.createRef()
    };
  }

  handleClick = e => {
    const node = this.state.menuRef.current;
    if (node.className === "menu-open") {
      node.className = "menu-close";
    } else {
      node.className = "menu-open";
    }
  };
  render() {
    return (
      <>
        <div>
          <nav>
            <h1 className="main-logo">Start Bootstrap</h1>
            <div className="ham">
              <span className="menu-text">MENU</span>
              <img
                src="https://icon-library.net/images/menu-icon-white-png/menu-icon-white-png-27.jpg"
                alt="ham_menu"
                onClick={this.handleClick}
              />
            </div>
            <ul>
              <li>SERVICES</li>
              <li>PORTFOLIO</li>
              <li>ABOUT</li>
              <li>TEAM</li>
              <li>CONTACT</li>
            </ul>
          </nav>
          <menu id="menu" ref={this.state.menuRef}>
            <ul className="drop-down">
              <li>SERVICES</li>
              <li>PORTFOLIO</li>
              <li>ABOUT</li>
              <li>TEAM</li>
              <li>CONTACT</li>
            </ul>
          </menu>
          {/* <div id="drop-down" ref={this.state.menuRef}>
              
            </div> */}
          <main>
            <div className="container">
              <h5>Welcome To Our Studio!</h5>
              <h2>IT'S NICE TO MEET YOU</h2>
              <button>TELL ME MORE</button>
            </div>
          </main>
        </div>
      </>
    );
  }
}

export default App;
