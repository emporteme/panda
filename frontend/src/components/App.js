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



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loaded: false,
      placeholder: "Loading"
    };
  }
  componentDidMount() {
    fetch("api/navbar")
      .then(response => {
        if (response.status > 400) {
          return this.setState(() => {
            return { placeholder: "Something went wrong!" };
          });
        }
        return response.json();
      })
      .then(data => {
        this.setState(() => {
          return {
            data,
            loaded: true
          };
        });
      });
  }

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
        
        <Record />

        <Important />
        <Support />
        <Team/>
        <Follow />
        <Consultation />
        <Footer />


      </div>
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);
