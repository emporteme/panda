import React, { Component } from "react";
import { render } from "react-dom";
import HomePage from "./HomePage";
import RoomJoinPage from "./RoomJoinPage";
import Header from "./Header.jsx";
import Team from "./Team.jsx";
import AboutPhone from "./AboutPhone.jsx";
import Sidebar from "./Sidebar.jsx";
import Composition from "./Composition.jsx";
import About from "./About.jsx";
import Record from "./Record.jsx";
import Important from "./Important.jsx";
import Support from "./Support.jsx";
import Consultation from "./Consultation.jsx";
import Footer from "./Footer/Footer.js";
import Follow from "./Follow.jsx";
import '../../static/css/App.css'
import '../../static/css/home.css'
import Products from "./Products.jsx";
import Cases from "./Cases.jsx";
export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <AboutPhone />
        <div className="wrapper">
          <div className="main">
            <Sidebar />
            <Composition />
          </div>
        </div>
        <About />
        <Products />
        <Record />
        <Cases />
        <Important />
        <Support />
        <Team />
        <Follow />
        <Consultation />
        <Footer />
      </div>
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);
